import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "fct",
        component: HomeComponent,
        children: [
            { path: "", loadComponent: () => import("../app/components/dashboard/dashboard.component").then(({DashboardComponent}) => DashboardComponent) },
            { path: "dashboard", loadComponent: () => import("../app/components/dashboard/dashboard.component").then(({DashboardComponent}) => DashboardComponent) },
            { path: "stats", loadComponent: () => import("../app/components/stats/stats.component").then(({StatsComponent}) => StatsComponent)  },
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
];