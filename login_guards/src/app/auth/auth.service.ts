import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validateRol(): boolean {
    const rol = Utils.getRole().toLowerCase()
    console.log(rol);

    let logged = false
    if (rol || rol !== '') {
      logged = true
    }
    return logged
  }

  validateAdminRol(): boolean {
    const rol = Utils.getRole().toLowerCase()
    console.log(rol);
    let isAdmin = false
    if (rol && rol == 'admin') {
      isAdmin=true
    }

    return isAdmin

  }

}
