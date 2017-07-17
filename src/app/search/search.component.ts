import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from "./search.component.html"
import {style} from './search.component.scss';

console.log(style)

@Component({
  selector: "search-component",
  template,
  styles: [style],
})
export class SearchComponent implements OnInit{
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {

  }
}
