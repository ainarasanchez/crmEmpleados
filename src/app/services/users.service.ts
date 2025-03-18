import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint: string = "https://crm-empleados-v2.onrender.com/api/usuarios"
  private httpClient = inject(HttpClient);

  login(user: IUser): Promise<Response> {
    return lastValueFrom(this.httpClient.post<Response>(`${this.endpoint}/login`, user))
  }

}
