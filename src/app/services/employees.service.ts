import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee.interface';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { withHttpTransferCacheOptions } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private endPoint: string = "https://crm-empleados-v2.onrender.com/api/empleados"
  private httpClient = inject(HttpClient);

  /**
   * getAll()
   * @returns Promise<IEmployee[]>
   */

  //Mi peticion necesita para ser validada el token de autorización para devolver datos del servidor

  /* OPCIÓN 1: se usa, siempre y cuando cada funcion del servicio tenga una cabecera distinta, vamos crear una cabecera, que sera un varible que contiene el token de autorización.*/
  
  /*  getAll(): Promise<IEmployee[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token') || ""
      })
    }

    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.endPoint, httpOptions)) 
  } */


  /* OPCIÓN 2: Creo una funcion interceptora que devuelve las cabeceras que necesito para todas las peticiones de empleados. Esta funcion seria solo para este servicio */
  
  /*getAll(): Promise<IEmployee[]> {
    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.endPoint, this.getAuthorization()))
  }

  getById(id: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.get<IEmployee>(`${this.endPoint}/${id}`, this.getAuthorization()))
  }

  private getAuthorization() {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token') || ""
      })
    }
  }*/

  /*OPCIÓN 3: Creo una funcion interceptora que devuelve las cabeceras que necesito para todas las peticiones de empleados. Esta funcion seria para todas las peticiones de la aplicación */
  getAll(): Promise<IEmployee[]> {
    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.endPoint))
  }

  getById(id: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.get<IEmployee>(`${this.endPoint}/${id}`))
  }

  delete(id: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.delete<IEmployee>(`${this.endPoint}/${id}`));
  }

  update(employee: IEmployee): Promise<IEmployee> {
    //destructuring
    let { _id, ...employeeBody } = employee;
    return lastValueFrom(this.httpClient.put<IEmployee>(`${this.endPoint}/${_id}`, employeeBody))
  }

  insert(employee: IEmployee): Promise<IEmployee> {
    let { _id, ...employeeBody } = employee;
    return lastValueFrom(this.httpClient.post<IEmployee>(this.endPoint, employeeBody))
  }


}
