import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  numbers: number[] = [];

  numbers2: number[] = [];

  constructor() { }

  retrieveNumbers(): number[]{
    return this.numbers;
  }
  retrieveNumbers2(): number[]{
    return this.numbers2;
  }

  addNumber(num: number) {
    this.numbers.push(num);
  }
  addNumber2(num: number) {
    this.numbers2.push(num);
  }

}
