import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    DashboardComponent,
    StatsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
