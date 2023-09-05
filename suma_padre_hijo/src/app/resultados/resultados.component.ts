import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})


export class ResultadosComponent {

  @Input() numero1:any=0;
  @Input() numero2: any =0;
  @Output() total = new EventEmitter<number>()
  resultado:number =0

  constructor(){
    
  }
  obtenerResultado(){
    this.numero1 = Number.parseInt(this.numero1)
    this.numero2 = Number.parseInt(this.numero2)
    this.resultado = this.numero1 + this.numero2
    this.total.emit(this.resultado)
  }
}
