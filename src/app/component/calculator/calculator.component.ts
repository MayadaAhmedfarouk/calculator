import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result: string = '';
  longButtons: string[] = ['AC', 'CE'];
  buttons: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '=',
    '+',
  ];
  private preValue: string = '';
  private curValue: string = '';


  constructor() { }

  ngOnInit(): void {
  }
  addToExpression(data: string) {
    if (this.result != '') {
      this.preValue = this.curValue;
      this.curValue = data;
    }
    if (data == 'AC') {
      this.result = '';
    } else if (data == 'CE') {
      this.result =
        this.preValue != '=' ? this.result.slice(0, -1) : this.result;
    } else if (data == '=') {
      this.result = eval(this.result);
    } else {
      this.result += data;
    }
  }

}
