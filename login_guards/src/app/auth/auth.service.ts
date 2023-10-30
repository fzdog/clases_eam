import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validateRol(): boolean {
    const rol = Utils.getRole().toLowerCase()

    if (rol || rol !== '') {
      return true
    }
    return false
  }

}
