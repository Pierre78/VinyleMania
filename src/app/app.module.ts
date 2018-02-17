import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { PleasureComponent } from './pleasure/pleasure.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PleasureComponent,
    AccountComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'bda4ada8694db06efcac9cf97b872b3e'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
