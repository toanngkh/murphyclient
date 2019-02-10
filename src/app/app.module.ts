import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserInputComponent } from './home/user-input/user-input.component';
import { HomeComponent } from './home/home.component';
import { WellProcedureService } from './shared/well-procedure.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [WellProcedureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
