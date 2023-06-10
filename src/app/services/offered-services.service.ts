import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { OfferedService } from '../models/offeredService';

@Injectable({
  providedIn: 'root'
})
export class OfferedServicesService {

  baseUrl = "http://localhost:8080/services";
  endpoints = {};
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllByCompanyId(categoryId: string): Observable<OfferedService[]> {
    return this.httpClient.get<OfferedService[]>(`${this.baseUrl}/${categoryId}`);
  }
}
