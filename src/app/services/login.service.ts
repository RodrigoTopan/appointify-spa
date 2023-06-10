import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginReq } from "../models/login";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  baseUrl = "http://localhost:8080/users";
  endpoints = {
    login: {
      register: "/register",
      authenticate: "/authenticate"
    }
  };

  constructor(private httpClient: HttpClient) {}

  post(reqBody: LoginReq): Observable<any> {
    console.log(reqBody)
    return this.httpClient.post(
      this.baseUrl + this.endpoints.login.authenticate,
      reqBody
    );
  }
}
