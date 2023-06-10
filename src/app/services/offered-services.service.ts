import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { OfferedService } from '../models/offeredService';

@Injectable({
  providedIn: 'root'
})
export class OfferedServicesService {

  baseUrl = "http://localhost:8080";
  endpoints = {};
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllByCompanyId(companyId: string): Observable<OfferedService[]> {
    return this.httpClient.get<OfferedService[]>(`${this.baseUrl}/companies/${companyId}/services`);
  }

  getById(id: string): Observable<OfferedService> {
    return this.httpClient.get<OfferedService>(`${this.baseUrl}/services/${id}`);
  }
}
