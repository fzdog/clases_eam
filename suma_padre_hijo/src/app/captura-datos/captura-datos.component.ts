import { Component } from '@angular/core';

@Component({
  selector: 'app-captura-datos',
  templateUrl: './captura-datos.component.html',
  styleUrls: ['./captura-datos.component.css']
})
export class CapturaDatosComponent {

  numero1Papa:number =0;
  numero2Papa:number=0;
  totalPapa: number = 0
  
 calculoHijo(total:any){
  this.totalPapa = total
 }
}
