import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReq, LoginRes } from '../models/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
	//baseUrl = 'https://modern-dream-376721.rj.r.appspot.com/';
	baseUrl = 'http://localhost:8080';
	endpoints = {
		login: {
			register: '/users/register',
			authenticate: '/users/authenticate'
		}
	}

  constructor(
		private httpClient: HttpClient
	) { }

	post(reqBody: LoginReq): Observable<any> {
		return this.httpClient.post(this.baseUrl + this.endpoints.login.authenticate, reqBody);
	}
}
