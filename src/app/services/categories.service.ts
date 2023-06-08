import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateCategoryReq } from "../models/category";
import { JwtInterceptor, JwtHelperService, JwtConfig } from '@auth0/angular-jwt';

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  baseUrl = "http://localhost:8080/categories";
  endpoints = {};
  headers = {
    Authorization: "Bearer " + localStorage.getItem("token")
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  create(reqBody: CreateCategoryReq): Observable<any> {
    return this.httpClient.post(this.baseUrl, reqBody, {
      headers: this.headers
    });
  }
}
