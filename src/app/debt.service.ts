import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor() { }

  data = new Array();
  total:number = 0;

  public get_data(){
    return this.data;
  }

  public add_data(name:string, reason:string, amount:number){
    this.data.push({name, reason, amount});
    console.log(this.data);
  }

  public update_total(){
    this.total = 0;
    this.data.forEach(element => {
      this.total += element.amount; 
    });
    console.log(this.total);
  }
}
