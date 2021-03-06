import { enableDebugTools, disableDebugTools, platformBrowser} from '@angular/platform-browser';
import { ApplicationRef, enableProdMode} from '@angular/core';
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

let bootstrap: Function;

// ------------------------------- PROD ------------------------------- //
if(NODE_ENV === 'production'){
  /**
   * Disable debug
   *
   * @type {NgModuleRef} modRef
   */
  const disableDebug = (modRef) => {
    const appRef = modRef.injector.get(ApplicationRef);

    appRef
      .components
      .forEach(disableDebugTools);

    return modRef;
  }

  bootstrap = function bootstrap(): Promise<any>{
    document.removeEventListener('DOMContentLoaded', bootstrap, false);

    return platformBrowser()
      .bootstrapModuleFactory(AppModuleNgFactory)
      .then(modRef => disableDebug(modRef))
      .then(() => enableProdMode());
  }
}
// -------------------------------------------------------------------- //


// ------------------------------- DEV -------------------------------- //
if(NODE_ENV === 'developement'){
   /**
   * Enable debug
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

    return platformBrowser()
      .bootstrapModuleFactory(AppModuleNgFactory)
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
