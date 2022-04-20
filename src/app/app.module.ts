import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButaoComponent } from './butao/butao.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CardComponent, ButaoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
