import { Component } from "@angular/core";
import { DebtService } from "../debt.service";

@Component({
    selector: 'app-list',
    template: `
        <h2>list</h2>
        <!-- voor elke persoon naam en bedrag weergeven -->
        <table>
            <tr>
                <th>Naam</th>
                <th>Reden</th>
                <th>Bedrag</th>
            </tr>
            <tr *ngFor="let debt of data">
                <td>{{debt.name}}</td>
                <td>{{debt.reason}}</td>
                <td>{{debt.amount}}</td>
                <td><button (click)="remove(debt.id)">wis</button></td>
            </tr>
        </table>
    `,
    styles: [`
        table, tr, th, td { border: 1px solid black; border-collapse: collapse;}
    `]
})
export class ListComponent{
    constructor(private debtService:DebtService){}

    data = this.debtService.get_data();

    public remove(id:number){
        this.debtService.remove_data(id);
    }
}