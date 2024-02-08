import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogRequest, IBlogResponse } from '../../interfaces/blog.interface';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = `http://localhost:3000`;
  private api = { blog: `${this.url}/blog` }

  constructor(private http: HttpClient) { }

  getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api.blog);
  }

  // getOne(id: number): Observable<IBlogResponse> {
  //   return this.http.get<IBlogResponse>(`${this.api.blog}/${id}`);
  // }

  create(blog: IBlogRequest): Observable<IBlogResponse> {
    return this.http.post<IBlogResponse>(this.api.blog, blog);
  }

  update(blog: IBlogRequest, id: number): Observable<IBlogResponse> {
    return this.http.patch<IBlogResponse>(`${this.api.blog}/${id}`, blog);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blog}/${id}`);
  }
}
