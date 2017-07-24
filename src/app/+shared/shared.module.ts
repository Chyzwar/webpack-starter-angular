import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../+material/material.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
  ],
  declarations: [
    FooterComponent,
    NavigationComponent,
  ],
})
export class SharedModule{};
