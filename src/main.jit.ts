import { enableDebugTools, disableDebugTools, platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ApplicationRef, enableProdMode} from '@angular/core';
import { AppModule } from './app/app.module';

let bootstrap : Function;

// ------------------------------- PROD ------------------------------- //
if(NODE_ENV === 'production'){
  /**
   * Disable debug
   *
   * @type {NgModuleRef} modRef
   */
  const disableDebug = (modRef) => {
    modRef
      .components
      .forEach(disableDebugTools);
  }

  bootstrap = function bootstrap(): Promise<any>{
    document.removeEventListener('DOMContentLoaded', bootstrap, false);

    return platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(modRef => disableDebug(modRef))
      .then(() => enableProdMode());
  }
}
// -------------------------------------------------------------------- //


// ------------------------------- DEV -------------------------------- //
if(NODE_ENV === 'development'){
   /**
   * Enable debug
   *
   * @param {NgModuleRef} modRef
   */
  const enableDebug = (modRef) => {
    modRef
      .components
      .forEach(enableDebugTools);
  }


  bootstrap = function bootstrap() : Promise<any>{
    document.removeEventListener('DOMContentLoaded', bootstrap, false);

    return platformBrowserDynamic()
      .bootstrapModule(AppModule);
      // .then(modRef => enableDebug(modRef))
  }
}
// -------------------------------------------------------------------- //


/**
 * Bootstrap Angular application in DOMContentLoader
 *
 * @param {String} 'DOMContentLoaded'
 * @param {Function} bootstrap()
 * @param {Boolean} false
 */
document.addEventListener('DOMContentLoaded', bootstrap(), false);
