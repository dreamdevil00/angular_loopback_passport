import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  template: `
    <div>正在重定向...</div>
  `
})

export class RouterComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store
      .select('auth')
      .subscribe((res: any) => {
        this.store.dispatch({
          type: res.loggedIn ? 'APP_REDIRECT_DASHBOARD'
                             : 'APP_REDIRECT_LOGIN'
        });
      })
  }
}
