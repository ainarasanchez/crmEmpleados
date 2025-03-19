import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee.interface';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private endPoint: string = "https://crm-empleados-v2.onrender.com/api/empleados"
  private httpClient = inject(HttpClient);


  getAll(): Promise<IEmployee[]> {
    return lastValueFrom()
  }


}
