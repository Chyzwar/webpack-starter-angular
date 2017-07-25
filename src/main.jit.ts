import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { ApplicationRef, enableProdMode} from '@angular/core';
import { AppModule } from './app/app.module';

let bootstrap: Function;

// ------------------------------- PROD ------------------------------- //
if(NODE_ENV === 'production'){
  /**
   * Disable debug mode
   *
   * @type {NgModuleRef} modRef
   */
  const disableDebug = (modRef) => {
    const appRef = modRef.injector.get(ApplicationRef)

    appRef
      .components
      .forEach(disableDebugTools);

    return modRef;
  }

  bootstrap = function bootstrap(): Promise<any>{
    document.removeEventListener('DOMContentLoaded', bootstrap, false);

    return platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(modRef => disableDebug(modRef))
      .then(modRef => enableProdMode());
  }
}
// -------------------------------------------------------------------- //


// ------------------------------- DEV -------------------------------- //
if(NODE_ENV === 'development'){
   /**
   * Enable debug mode
   *
   * @param {NgModuleRef} modRef
   */
  const enableDebug = (modRef) => {
    const appRef = modRef.injector.get(ApplicationRef);

    appRef
      .components
      .forEach(enableDebugTools);

    return modRef;
  }


  bootstrap = function bootstrap() : Promise<any>{
    document.removeEventListener('DOMContentLoaded', bootstrap, false);

    return platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(modRef => enableDebug(modRef))
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
