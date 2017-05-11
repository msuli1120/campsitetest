import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { ApiKeys } from './apiKeys';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ApiKeys],
  bootstrap: [AppComponent]
})
export class AppModule { }
