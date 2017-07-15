import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { appRoutes } from './app.routes'


const AppRoutes = RouterModule.forRoot(
  appRoutes,
  {enableTracing: true}
);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutes
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
