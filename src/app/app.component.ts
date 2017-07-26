import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <navigation></navigation>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer></footer>
  `
})
export class AppComponent implements OnInit{
  public ngOnInit() {


  }
}
