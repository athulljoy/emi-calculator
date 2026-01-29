import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  principal: number = 0;
  rate: number = 0;
  tenure: number = 0;

  emi: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;


  calculateEMI() {
    if (this.principal && this.rate && this.tenure) {
      const monthlyRate = this.rate / 12 / 100;
      const months = this.tenure;

      const emiValue =
        (this.principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

      this.emi = parseFloat(emiValue.toFixed(2));
      this.totalAmount = parseFloat((this.emi * months).toFixed(2));
      this.totalInterest = parseFloat((this.totalAmount - this.principal).toFixed(2));
    }
  }

  reset() {
    this.principal = 0;
    this.rate = 0;
    this.tenure = 0;

    this.emi = 0;
    this.totalInterest = 0;
    this.totalAmount = 0;
  }
}
