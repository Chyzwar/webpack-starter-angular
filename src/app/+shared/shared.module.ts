import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../+material/material.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  imports: [
    MaterialModule,
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
  ],
  declarations: [],
})
export class SharedModule{};
