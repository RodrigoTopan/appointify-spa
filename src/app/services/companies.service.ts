import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateCategoryReq } from "../models/category";
import { JwtInterceptor, JwtHelperService, JwtConfig } from '@auth0/angular-jwt';

@Injectable({
  providedIn: "root"
})
export class CompaniesService {
  baseUrl = "http://localhost:8080/companies";
  endpoints = {};
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
