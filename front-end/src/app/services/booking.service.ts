import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  baseUrl = environment.API_URL;
  getConfirmationDetailsUrl = this.baseUrl + "/details";
  onCheckinConfirmUrl = this.baseUrl + "/checkin";

  constructor(private http: HttpClient) {}

  getConfirmationDetails(dataToSend): Observable<any> {
    return this.http.post(this.getConfirmationDetailsUrl, dataToSend);
  }

  onConfirmCheckin(dataToSend): Observable<any> {
    return this.http.post(this.onCheckinConfirmUrl, dataToSend);
  }
}
