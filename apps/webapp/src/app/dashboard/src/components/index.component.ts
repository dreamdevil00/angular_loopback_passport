// A Routing shell component for a module
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class IndexComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
