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
  // Esto se añade después: 
  router = inject(Router);

  // Para botón de volver
  @Input() volver: Boolean = false;


  deleteEmployee(id: string) {
    toast(`Vas a borrar al empleado ${this.myEmployee.nombre} ${this.myEmployee.apellidos} `, {
      action: {
        label: 'Aceptar',
        onClick: async () => {
          //borrado el empleado llamando al servicio
          await this.employeesService.delete(id)
          //window.location.href = '/dashboard/empleados'
          // Esto se añade luego:
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
