import { Component, Input } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';

@Component({
  selector: 'app-row-employee',
  imports: [],
  templateUrl: './row-employee.component.html',
  styleUrl: './row-employee.component.css'
})
export class RowEmployeeComponent {
  @Input() myEmployee!: IEmployee;

}
