import { Component, inject } from '@angular/core';
import { IEmployee } from '../../../interfaces/iemployee.interface';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-empleados-list',
  imports: [],
  templateUrl: './empleados-list.component.html',
  styleUrl: './empleados-list.component.css'
})
export class EmpleadosListComponent {
  arrEmployees: IEmployee[] = [];
  employeesService = inject(EmployeesService);

  async ngOnInit() {
    try {
      this.arrEmployees = await this.employeesService.getAll();
      console.log(this.arrEmployees);
    } catch (msg: any) {
      console.error('Error', msg.error.error);
    }
  }
  
}
