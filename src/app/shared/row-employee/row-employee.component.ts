import { Component, Input } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: '[app-row-employee]',
  imports: [ButtonsComponent],
  templateUrl: './row-employee.component.html',
  styleUrl: './row-employee.component.css'
})
export class RowEmployeeComponent {
  @Input() myEmployee!: IEmployee;

}
