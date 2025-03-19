import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [RouterLink],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css'
})
export class DashboardNavComponent {
  router = inject(Router)


  logOut() {
    // la funcion logout es eliminar el token y redirigir a login
    // para eliminar un elemento del localstorage usamos localStorage.removeItem('token')
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
  }
}
