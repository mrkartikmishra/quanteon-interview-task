import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-safty-instruction",
  templateUrl: "./safty-instruction.component.html",
  styleUrls: ["./safty-instruction.component.scss"]
})
export class SaftyInstructionComponent implements OnInit {
  disableCheckBox: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  onCheckConfirmBox(isChecked) {
    if (isChecked.target.checked == true) {
      this.disableCheckBox = true;
    } else {
      this.disableCheckBox = false;
    }
  }
  onConfirmSafetyInstruction() {
    var navigationData = {
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
    this.router.navigate(["boarding-pass"], { queryParams: navigationData });
  }
}
