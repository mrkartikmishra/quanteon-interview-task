import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BookingService } from "../../services/booking.service";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  ticketConfirmationDetails: FormGroup;

  errorMessage: string = "";
  isBookingPresent: boolean = false;
  bookingDetails: [];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.createConfirmationDetailsForm();
  }

  createConfirmationDetailsForm() {
    this.ticketConfirmationDetails = this.fb.group({
      confirmationNo: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }

  resetConfirmationDetailsForm() {
    this.ticketConfirmationDetails = this.fb.group({
      confirmationNo: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }

  onSubmitConfirmationDetails() {
    this.bookingService
      .getConfirmationDetails(this.ticketConfirmationDetails.value)
      .subscribe(
        receivedData => {
          if (receivedData.status == 200) {
            sessionStorage.setItem("data", "sessionData");
            this.bookingDetails = receivedData;
            this.isBookingPresent = true;
            this.errorMessage = "";
          } else if (receivedData.status == 404) {
            this.isBookingPresent = false;
            this.errorMessage =
              "Confirmation number and last name combination not exists";
          }
        },
        error => {
          this.isBookingPresent = false;
          this.errorMessage = "Something went wrong .Please try again!!";
        }
      );
  }
  onResetConfirmationDetailsForm() {
    this.resetConfirmationDetailsForm();
    this.isBookingPresent = false;
    this.errorMessage = "";
  }
}
