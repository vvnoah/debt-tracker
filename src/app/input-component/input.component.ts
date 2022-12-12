import { Component } from "@angular/core";
import { DebtService } from "../debt.service";
import { TotalComponent } from "../total-component/total.component";

@Component({
    selector: 'app-input',
    template: `
        <section id="input">
            <h2>input</h2>
            <input #name name="name" type="text" placeholder="naam">
            <input #reason name="reason" type="text" placeholder="reden">
            <input #amount name="amount" type="number" placeholder="bedrag">
            <button (click)="onClick(name.value, reason.value, +amount.value)">Voeg toe</button>
        </section>
    `,
    styles: [`
    
    `]
})
export class InputComponent{
    constructor(private debtService:DebtService){}

    onClick(name:string, reason:string, amount:number){
        this.debtService.add_data(name, reason, amount);
    }
}