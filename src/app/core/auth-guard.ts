import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  //Injeção de dependência
  const router = inject(Router);

  //Verificar se o usuário não está autenticado
  if(sessionStorage.getItem('usuario') == null) {
      return router.parseUrl('/autenticar');
  }

  return true;
};