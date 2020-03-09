import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorMessageComponent } from "./components/error-message/error-message.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { FlightDetailsComponent } from "./components/flight-details/flight-details.component";
import { SaftyInstructionComponent } from "./components/safty-instruction/safty-instruction.component";
import { BoardingPassComponent } from "./components/boarding-pass/boarding-pass.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { SuccessComponent } from './components/success/success.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent,
    ConfirmationComponent,
    FlightDetailsComponent,
    SaftyInstructionComponent,
    BoardingPassComponent,
    NavigationComponent,
    HomeComponent,
    SuccessComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
