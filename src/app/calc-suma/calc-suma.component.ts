import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-suma',
  templateUrl: './calc-suma.component.html',
  styleUrls: ['./calc-suma.component.css']
})
export class CalcSumaComponent implements OnInit {

  title = 'Aplicación de calculadora';
  operandoA = 0;
  operandoB = 0;
  resultadoSuma = 0;

  sumar(){
    this.resultadoSuma = this.operandoA + this.operandoB;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
