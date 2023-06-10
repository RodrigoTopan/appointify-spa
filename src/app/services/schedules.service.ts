import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ScheduleAvailable } from "../models/scheduleAvailable";

@Injectable({
  providedIn: "root"
})
export class SchedulesService {
  baseUrl = "http://localhost:8080/schedules";

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllAvailable(
    companyId: string,
    offeredServiceId: string
  ): Observable<ScheduleAvailable[]> {
    return this.httpClient.get<ScheduleAvailable[]>(
      `${this.baseUrl}/available`,
      {
        params: {
          companyId,
          offeredServiceId,
          rangeStartDate: new Date().toISOString(),
          rangeEndDate: new Date().toISOString()
        }
      }
    );
  }
}
