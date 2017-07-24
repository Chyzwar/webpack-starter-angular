import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';


export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true, preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
