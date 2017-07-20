import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './+material/material.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  exports: [
    MaterialModule,
    FooterComponent,
    NavigationComponent,
  ],
  declarations: [],
})
export class SharedModules{};
