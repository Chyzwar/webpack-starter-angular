import { Routes } from '@angular/router';

import SearchComponent from "./search/search.component";
import DetailsComponent from "/details/details.component";
import CreateComponent from "./create/create.component";

export default const ROUTES: Routes = [
  { path: '',        component: SearchComponent },
  { path: 'home',    component: SearchComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'create',  component: CreateComponent },
];
