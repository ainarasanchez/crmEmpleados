import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usersService = inject(UsersService);
  router = inject(Router);

  async getLogin(form: any) {
    try {
      let response = await this.usersService.login(form.value);
      //localstorage / cuatro metodos almecena informacion como texto
        // getItem() => obtener un dato del localstorage
        // setItem() => guardar un dato del localstorage
        // removeItem() => borrar un dato del localstorage
        // clear() => limpiar todo el localstorage
      if (response.success) {
        //estoy logado correctamente y entro a dashboard
        localStorage.setItem('token', response.token)
        this.router.navigate(['/dashboard'])
      }
    } catch (msg: any) {
      toast.error(msg.error.error)
    }
  }
}
