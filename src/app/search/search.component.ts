import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import template from "./search.component.html"


@Component({
  selector: "search-component",
  template,
})
export class SearchComponent implements OnInit{
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {

  }
}
