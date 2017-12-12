import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  public user;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store
      .select('app')
      .subscribe((res) => {
        this.user = res.currentUser;
      })
  }
}
