import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebtService } from './debt.service';
import { InputComponent } from './input-component/input.component';
import { ListComponent } from './list-component/list.component';
import { TotalComponent } from './total-component/total.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DebtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
