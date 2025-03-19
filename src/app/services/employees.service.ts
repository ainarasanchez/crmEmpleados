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
  getAll(): Promise<IEmployee[]> {


    /* OPCIÓN 1: se usa, siempre y cuando cada funcion del servicio tenga una cabecera distinta, vamos crear una cabecera, que sera un varible que contiene el token de autorización.

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token') || ""
      })
    }

    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.endPoint, httpOptions)) */

    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.endPoint, this.getAuthorization()))

  }

  getById(id: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.get<IEmployee>(`${this.endPoint}/${id}`, this.getAuthorization()))
  }

  /* OPCIÓN 2: Creo una funcion interceptora que devuelve las cabeceras que necesito para todas las peticiones de empleados. Esta funcion seria solo para este servicio */
  private getAuthorization() {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token') || ""
      })
    }
  }


}
