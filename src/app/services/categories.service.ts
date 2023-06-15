import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category, CreateCategoryReq } from "../models/category";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  baseUrl = "http://localhost:8080/categories";
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getCategoryById(categoryId: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseUrl}/${categoryId}`);
  }

  create(reqBody: CreateCategoryReq): Observable<any> {
    return this.httpClient.post(this.baseUrl, reqBody);
  }
}
