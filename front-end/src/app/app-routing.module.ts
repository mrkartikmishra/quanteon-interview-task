import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { BoardingPassComponent } from "./components/boarding-pass/boarding-pass.component";
import { SaftyInstructionComponent } from "./components/safty-instruction/safty-instruction.component";
import { SuccessComponent } from "./components/success/success.component";
import { AccessDeniedComponent } from "./components/access-denied/access-denied.component";
import { CheckinGuard } from "./guards/checkin.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "confirmation",
    component: ConfirmationComponent
  },
  {
    path: "safety-instruction",
    component: SaftyInstructionComponent,
    canActivate: [CheckinGuard]
  },
  {
    path: "boarding-pass",
    component: BoardingPassComponent,
    canActivate: [CheckinGuard]
  },
  {
    path: "success",
    component: SuccessComponent,
    canActivate: [CheckinGuard]
  },
  {
    path: "access-denied",
    component: AccessDeniedComponent
  },
  {
    path: "**",
    component: AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
