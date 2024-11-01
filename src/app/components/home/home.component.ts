import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StatsComponent } from '../stats/stats.component';
import { CommonModule } from '@angular/common';
import AppAuthService from '../../../services/auth.service';
import UserService from '../../../services/user.service';
import User from '../../models/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    DashboardComponent,
    StatsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(private readonly appAuthService: AppAuthService,
    private userService : UserService,
    private readonly router: Router) { }
     user: User | undefined;
  showProfileMenu = false;

  ProfileMenuAction(){
    this.showProfileMenu = !this.showProfileMenu;
  }
  navigate(route: string){
    if(route == 'Dashboard')
    this.router.navigate(["fct/dashboard"]);
    if(route == 'Statistics')
      this.router.navigate(["fct/stats"]);
  }
  signOut(){
    this.appAuthService.signout();
  }

  ngOnInit(){
    this.userService.get().subscribe((res) => {
      if(res) {
        this.user = res;
      }
    })
  }
}
