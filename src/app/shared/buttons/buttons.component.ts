import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { toast } from 'ngx-sonner';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() myEmployee: IEmployee | any;

  employeesService = inject(EmployeesService)
  @Output() deleteItemEmit: EventEmitter<Boolean> = new EventEmitter();
  router = inject(Router);
  @Input() volver: Boolean = false;


  deleteEmployee(id: string) {
    toast(`Vas a borrar al empleado ${this.myEmployee.nombre} ${this.myEmployee.apellidos} `, {
      action: {
        label: 'Aceptar',
        onClick: async () => {
          //borrado el empleado llamando al servicio
          await this.employeesService.delete(id)
          //window.location.href = '/dashboard/empleados'
          //si tenemos un output en la etiqueta del componente realizamos el output y si no redirigimos a la ruta empleados
          if (this.deleteItemEmit.observed) {
            this.deleteItemEmit.emit(true)
          } else {
            this.router.navigate(['/dashboard', 'empleados'])
          }

        }
      }
    });
  }
}
