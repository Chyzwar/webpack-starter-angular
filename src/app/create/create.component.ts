import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './create.component.html';
import styles from './create.component.css';


@Component({
  selector: 'create-component',
  template
})
export class CreateComponent implements OnInit{
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {

  }
}

