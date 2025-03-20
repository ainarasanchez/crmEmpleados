import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEmployee } from '../../interfaces/iemployee.interface';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() myEmployee!: IEmployee;

}
