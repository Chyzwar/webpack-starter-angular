import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './navigation.component.html';
import styles from './navigation.component.scss';


@Component({
  selector: 'navigation',
  template,
  styles: [
    styles
  ]
})
export class NavigationComponent implements OnInit{
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {

  }
}

