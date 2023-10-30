import { CanActivateFn, Router } from '@angular/router';
import { Utils } from '../utils/utils';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const rol = Utils.getRole()

  if (rol !== '') {
    return true;
  }
  router.navigateByUrl('restricted')
  return false

};
