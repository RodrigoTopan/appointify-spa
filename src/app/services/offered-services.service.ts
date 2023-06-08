import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferedServicesService {

  baseUrl = "http://localhost:8080/services";
  endpoints = {};
  headers = {
    Authorization: "Bearer " + localStorage.getItem("token")
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl, { headers: this.headers});
  }
}
