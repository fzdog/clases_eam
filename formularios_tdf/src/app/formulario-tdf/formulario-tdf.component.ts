import { Component } from '@angular/core';
import { Persona } from './persona';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formulario-tdf',
  templateUrl: './formulario-tdf.component.html',
  styleUrls: ['./formulario-tdf.component.css']
})
export class FormularioTDFComponent {

  persona: Persona = new Persona()
  submitted: boolean = false;
  constructor() {
    
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log("Valores form:", form);
  
  }
}
