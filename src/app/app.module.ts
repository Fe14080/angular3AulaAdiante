import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButaoComponent } from './butao/butao.component';
import { AlertaComponent } from './alerta/alerta.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ButaoComponent, AlertaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
