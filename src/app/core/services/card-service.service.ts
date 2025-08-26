import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogcard, Chefcard, foodCard } from '../models/interface/Idata';
import { API_URL } from '../constant/apiurl';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private http=inject(HttpClient)
  
   getMenus(): Observable<foodCard[]> {
    return this.http.get<foodCard[]>(`${API_URL.baseUrl}${API_URL.endpoints.menu}`);
  }
  //  getMenusperpag(limit: number = 8): Observable<foodCard[]> {
  //  return this.http.get<foodCard[]>(`http://localhost:3000/menu?_limit=${limit}`);
  // }
   getpopular(): Observable<number[]> {
    return this.http.get<number[]>(`${API_URL.baseUrl}${API_URL.endpoints.popular}`);
  }

  getChefs(): Observable<Chefcard[]> {
    return this.http.get<Chefcard[]>(`${API_URL.baseUrl}${API_URL.endpoints.chefs}`);
  }

  getBlogs(): Observable<Blogcard[]> {
    return this.http.get<Blogcard[]>(`${API_URL.baseUrl}${API_URL.endpoints.blogs}`);
  }
}


// getCardsByType(type: 'menu' | 'popular' | 'chef' | 'blog') {
//   return this.http.get<any[]>(`${API_URL.baseUrl}?type=${type}`)
//     .pipe(map(res => res[0]?.data || []));
// }