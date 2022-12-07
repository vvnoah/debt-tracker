import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-input></app-input>
    <app-total></app-total>
    <app-list></app-list>
  `,
  styles: [`
    
  `]
})
export class AppComponent {
  title = 'debt-tracker';
}
