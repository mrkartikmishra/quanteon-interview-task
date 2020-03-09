import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookingService } from "src/app/services/booking.service";

@Component({
  selector: "app-boarding-pass",
  templateUrl: "./boarding-pass.component.html",
  styleUrls: ["./boarding-pass.component.scss"]
})
export class BoardingPassComponent implements OnInit {
  errorMessage: string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  boardingDetails;

  ngOnInit() {
    let navigationData = {
      confirmationNo: this.route.snapshot.queryParamMap.get("confirmationNo"),
      firstName: this.route.snapshot.queryParamMap.get("firstName"),
      lastName: this.route.snapshot.queryParamMap.get("lastName"),
      contactNo: this.route.snapshot.queryParamMap.get("contactNo"),
      pid: this.route.snapshot.queryParamMap.get("pid"),
      pname: this.route.snapshot.queryParamMap.get("pname"),
      page: this.route.snapshot.queryParamMap.get("page"),
      pseatNo: this.route.snapshot.queryParamMap.get("pseatNo"),
      flightId: this.route.snapshot.queryParamMap.get("flightId"),
      company: this.route.snapshot.queryParamMap.get("company"),
      duration: this.route.snapshot.queryParamMap.get("duration"),
      source: this.route.snapshot.queryParamMap.get("source"),
      destination: this.route.snapshot.queryParamMap.get("destination"),
      departureTime: this.route.snapshot.queryParamMap.get("departureTime")
    };
    this.boardingDetails = navigationData;
  }

  onConfirmBoardingPass() {
    this.errorMessage = "";
    var dataToSend = {
      confirmationNo: this.boardingDetails.confirmationNo,
      pid: this.boardingDetails.pid
    };
    if (confirm("Are you sure?")) {
      this.bookingService.onConfirmCheckin(dataToSend).subscribe(
        result => {
          if (result.status == 200 && result.msg == "already checkedin") {
            this.errorMessage = " Sorry!! Passenger already checkedin..";
            return;
          } else {
            this.errorMessage = "";
            this.router.navigate(["/success"]);
          }
        },
        error => {
          this.errorMessage = "Oopss!! Something went wrong!!";
        }
      );
    } else {
      return;
    }
  }
  onBackBoardingPass() {
    this.router.navigate(["/confirmation"]);
  }
}
