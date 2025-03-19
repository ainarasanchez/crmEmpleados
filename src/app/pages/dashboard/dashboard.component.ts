import { Component } from '@angular/core';
import { DashboardNavComponent } from "../../shared/dashboard-nav/dashboard-nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardNavComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
