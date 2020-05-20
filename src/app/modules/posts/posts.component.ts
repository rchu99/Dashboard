import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  getUsers = () =>
      this.dashboardService
        .getNewUsers()
        .subscribe(res => (this.newUsers = res));

  newUsers;

  ngOnInit() {
  this.getUsers;
  }

}
