import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

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
  declarations: [
    AppComponent,
    CreateComponent,
    DetailsComponent,
    SearchComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
