import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-flight-details",
  templateUrl: "./flight-details.component.html",
  styleUrls: ["./flight-details.component.scss"]
})
export class FlightDetailsComponent implements OnInit {
  @Input("flightDetails") flightDetailsReceived;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnChanges() {}

  onCheckinPassenger(flightDetails) {
    this.router.navigate(["safety-instruction"], {
      queryParams: {
        confirmationNo: flightDetails.confirmationNo,
        firstName: flightDetails.firstName,
        lastName: flightDetails.lastName,
        contactNo: flightDetails.contactNo,
        pid: flightDetails.pid,
        pname: flightDetails.pname,
        page: flightDetails.page,
        pseatNo: flightDetails.pseatNo,
        flightId: flightDetails.flightId,
        company: flightDetails.company,
        duration: flightDetails.duration,
        source: flightDetails.source,
        destination: flightDetails.destination,
        departureTime: flightDetails.departureTime
      },
      skipLocationChange: true
    });
  }
}
