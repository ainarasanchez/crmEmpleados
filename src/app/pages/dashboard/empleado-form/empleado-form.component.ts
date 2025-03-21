import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IEmployee } from '../../../interfaces/iemployee.interface';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-empleado-form',
  imports: [ReactiveFormsModule],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {
  @Input() idEmployee: string = ""
  employeeForm: FormGroup = new FormGroup({}, [])
  employee!: IEmployee;
  employeesService = inject(EmployeesService);
  title: string = "Registrar";
  router = inject(Router);


  async ngOnInit() {
    // si recibimos id, tengo que llamar getById traerme los datos y pintarlos dentro del formulario, y si no recibimos id lo unico que tengo que hacer es recoger los datos y posteriormente insertarlos con ayuda del servicio.
    // CRUD - Create - Read - Update - Delete un elemento o entidad
    if (this.idEmployee) {
      //llamamos al servicio y cargamos los datos del empleado.
      try {
        this.employee = await this.employeesService.getById(this.idEmployee);
        this.title = 'Actualizar'
      } catch (msg: any) {
        toast.error(msg.error.error)
      }
    }

    this.employeeForm = new FormGroup({
      _id: new FormControl(this.idEmployee || null, []),
      nombre: new FormControl(this.employee?.nombre || "", []),
      apellidos: new FormControl(this.employee?.apellidos || "", []),
      telefono: new FormControl(this.employee?.telefono || "", []),
      email: new FormControl(this.employee?.email || "", []),
      salario: new FormControl(this.employee?.salario || 0, []),
      departamento: new FormControl(this.employee?.departamento || "", []),
    }, [])

  }

  getDataForm() {

  }

}
