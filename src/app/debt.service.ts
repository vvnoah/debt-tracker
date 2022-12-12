import { Injectable } from '@angular/core';

@Injectable()
export class DebtService {
  constructor() {}

  $data = new Array();
  

  public get_data() {
    return this.$data;
  }

  public add_data(name: string, reason: string, amount: number) {
    this.$data.push({ name, reason, amount });
  }

  public get_total() {
    let total:number = 0;
    this.$data.forEach(element => {
      total += element.amount;
    });
    return total;
  }
}
