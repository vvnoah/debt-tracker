import { Component, Input } from "@angular/core";
import { DebtService } from "../debt.service";

@Component({
    selector: 'app-total',
    template: `
        <h2>total</h2>
        <p>Totaal bedrag is: {{show_total()}}</p>
    `,
    styles: [`
    
    `]
})
export class TotalComponent{
    constructor(private debtService:DebtService){}

    public show_total(){
        return this.debtService.get_total();
    }
}