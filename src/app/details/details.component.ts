import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './details.component.html';


@Component({
  selector: "details-component",
  template
})
export class DetailsComponent implements OnInit{
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {

  }
}
