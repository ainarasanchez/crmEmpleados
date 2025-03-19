import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // logica del interceptor
  // añadir aquí la cabecera a la petición, clonando la peticion de salida
  console.log(req)
  const cloneRequest = req.clone({
    setHeaders: {
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('token') || ""
    }
  })
  return next(cloneRequest);
};
