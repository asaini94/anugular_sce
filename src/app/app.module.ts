import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { FormsModule } from '@angular/forms';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Component1Component } from './scenario3/component1/component1.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { S4component1Component } from './scenario4/s4component1/s4component1.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { S5component1Component } from './scenario5/s5component1/s5component1.component';
import { S5component2Component } from './scenario5/s5component1/s5component2/s5component2.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { S6component1Component } from './scenario6/s6component1/s6component1.component';
import { S6component2Component } from './scenario6/s6component2/s6component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Component1Component,
    Scenario4Component,
    S4component1Component,
    Scenario5Component,
    S5component1Component,
    S5component2Component,
    Scenario6Component,
    S6component1Component,
    S6component2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
