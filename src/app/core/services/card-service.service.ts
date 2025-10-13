import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Blogcard, Chefcard, foodCard, Popular } from '../models/interface/Idata';
import { API_URL } from '../constant/apiurl';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private http = inject(HttpClient);

  getMenus(): Observable<foodCard[]> {
    if (environment.production) {
      return this.http.get<any>(`${API_URL.baseUrl}`).pipe(map(data => data.menu));
    }
    return this.http.get<foodCard[]>(`${API_URL.baseUrl}${API_URL.endpoints.menu}`);
  }

  getProductById(id: number): Observable<foodCard> {
    return this.http.get<foodCard>(`${API_URL.baseUrl}${API_URL.endpoints.menu}/${id}`);
  }

  getBlogById(id: number): Observable<Blogcard> {
    return this.http.get<Blogcard>(`${API_URL.baseUrl}${API_URL.endpoints.blogs}/${id}`);
  }

  getPopular(): Observable<Popular[]> {
    if (environment.production) {
      return this.http.get<any>(`${API_URL.baseUrl}`).pipe(map(data => data.popular));
    }
    return this.http.get<Popular[]>(`${API_URL.baseUrl}${API_URL.endpoints.popular}`);
  }

  getChefs(): Observable<Chefcard[]> {
    if (environment.production) {
      return this.http.get<any>(`${API_URL.baseUrl}`).pipe(map(data => data.chef));
    }
    return this.http.get<Chefcard[]>(`${API_URL.baseUrl}${API_URL.endpoints.chefs}`);
  }

  getBlogs(): Observable<Blogcard[]> {
    if (environment.production) {
      return this.http.get<any>(`${API_URL.baseUrl}`).pipe(map(data => data.blog));
    }
    return this.http.get<Blogcard[]>(`${API_URL.baseUrl}${API_URL.endpoints.blogs}`);
  }
}


// getCardsByType(type: 'menu' | 'popular' | 'chef' | 'blog') {
//   return this.http.get<any[]>(`${API_URL.baseUrl}?type=${type}`)
//     .pipe(map(res => res[0]?.data || []));
// }