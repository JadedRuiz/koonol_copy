import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = getJwtToken();
  if(token) {
    req.clone({
      setHeaders : {
        Authorization : `Bearer ${token}`
      }
    })
  }
  
  return next(req);

  function getJwtToken(): string | null {
    return localStorage.getItem('JWT_TOKEN');
  }
};
