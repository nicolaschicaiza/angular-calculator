import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  resultado: number = 0;
  operandorA: number = 0;
  operandorB: number = 0;

  sumar(): void {
    this.resultado = this.operandorA + this.operandorB;
  }

  restar(): void {
    this.resultado = this.operandorA - this.operandorB;
  }

  multiplicar(): void {
    this.resultado = this.operandorA * this.operandorB;
  }

  dividir(): void {
    this.resultado = this.operandorA / this.operandorB;
  }
}
