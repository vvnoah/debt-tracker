import { Component } from "@angular/core";
import { DebtService } from "../debt.service";

@Component({
    selector: 'app-total',
    template: `
        <h2>total</h2>
        <p>Totaal bedrag is: {{total}}</p>
    `,
    styles: [`
    
    `]
})
export class TotalComponent{
    constructor(private debtService:DebtService){}

    total = this.debtService.total;
}