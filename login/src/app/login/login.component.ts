import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormulario!: FormGroup
  usuario: Usuario = new Usuario()

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.loginFormulario = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]]
    })

  }

  onLogin() {
    if (this.loginFormulario.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Todo está OK!'        
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    console.log(this.loginFormulario);

  }

}
