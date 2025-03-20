import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empleado-form',
  imports: [],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {
  @Input() idEmployee: string = ""

  ngOnInit() {
    console.log(this.idEmployee)
    // si recibimos id, tengo que llamar getById traerme los datos y pintarlos dentro del formulario, y si no recibimos id lo unico que tengo que hacer es recoger los datos y posteriormente insertarlos con ayuda del servicio.
    // CRUD - Create - Read - Update - Delete un elemento o entidad
  }

}
