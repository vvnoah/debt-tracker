import { Injectable } from '@angular/core';

@Injectable()
export class DebtService {
  constructor() {}

  $data = new Array();
  $id:number = 0;  

  public get_data() {
    return this.$data;
  }

  public add_data(name: string, reason: string, amount: number) {
    this.$id++;
    this.$data.push({id:this.$id, name, reason, amount });
    console.log(this.$data);
  }

  public get_total() {
    let total:number = 0;
    this.$data.forEach(element => {
      total += element.amount;
    });
    return total;
  }
}
