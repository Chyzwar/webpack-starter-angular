import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './footer.component.html';
import styles from './footer.component.scss';


@Component({
  selector: 'footer',
  template,
  styles: [
    styles
  ],
})
export class FooterComponent implements OnInit{
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {

  }
}

