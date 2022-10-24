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
    console.log("operación de suma")
    this.resultado = this.operandorA + this.operandorB;
  }
}
