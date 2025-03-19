import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { EmpleadosListComponent } from './pages/dashboard/empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './pages/dashboard/empleado-form/empleado-form.component';
import { EmpleadoViewComponent } from './pages/dashboard/empleado-view/empleado-view.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [loginGuard], children: 
        [
            { path: '', pathMatch: 'full', redirectTo: 'empleados' },
            { path: 'empleados', component: EmpleadosListComponent },
            { path: 'empleado/new', component: EmpleadoFormComponent },
            { path: 'empleado/:idEmployee', component: EmpleadoViewComponent },
            { path: 'empleado/update/:idEmployee', component: EmpleadoFormComponent }
          ]
    },
    { path: "**", redirectTo: 'home' }
];
