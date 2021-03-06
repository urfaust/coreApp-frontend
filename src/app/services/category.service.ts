import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

const baseUrl = 'http://localhost:8080/api/categories';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl);
  }

  get(id: any): Observable<Category> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
