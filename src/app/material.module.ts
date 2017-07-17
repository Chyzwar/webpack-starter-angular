/**
 * Themes:
 * - deeppurple-amber.css
 * - indigo-pink.css
 * - purple-green.css
 * - pink-bluegrey.css
 *
 * @see https://material.angular.io/guide/theming
 */
import "@angular/material/prebuilt-themes/indigo-pink.css";

import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdTableModule,
   ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdTableModule,
  ],
})
export class MaterialModule { }
