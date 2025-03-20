import { Component, inject, Input } from '@angular/core';
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";
import { IEmployee } from '../../../interfaces/iemployee.interface';
import { EmployeesService } from '../../../services/employees.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-empleado-view',
  imports: [ButtonsComponent],
  templateUrl: './empleado-view.component.html',
  styleUrl: './empleado-view.component.css'
})
export class EmpleadoViewComponent {

  @Input() idEmployee: string = ""
  employee!: IEmployee | any;
  employeesService = inject(EmployeesService)

  async ngOnInit() {
    try {
      this.employee = await this.employeesService.getById(this.idEmployee);
    } catch (msg: any) {
      toast.error(msg.error)
    }
  }

}
