import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';

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
  }

  public remove_data(value:number){
    let index = this.$data.findIndex((element) => element.id == value);
    this.$data.splice(index, 1);
  }

  public get_total() {
    let total:number = 0;
    this.$data.forEach(element => {
      total += element.amount;
    });
    return total;
  }
}
