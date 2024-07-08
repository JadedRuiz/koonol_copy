import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const router : Router = inject(Router);
  const authService : AuthService = inject(AuthService);

  if(!authService.isLoggedIn()) {
    router.navigate(['/login'])
    return false;
  }
  return true;
};
