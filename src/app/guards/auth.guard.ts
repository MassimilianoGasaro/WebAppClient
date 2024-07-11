import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AuthService);
  const toastr = inject(ToastrService);

  if (accountService.currentUserSource()) return true;
  else {
    toastr.error('Non puoi accedere a questa risorsa');
    return false;
  }
};

