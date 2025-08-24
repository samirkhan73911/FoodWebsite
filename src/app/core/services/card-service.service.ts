import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSimpleCard } from '../models/interface/Idata';
import { API_URL } from '../constant/apiurl';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private http=inject(HttpClient)
  
   getMenus(): Observable<MenuSimpleCard[]> {
    return this.http.get<MenuSimpleCard[]>(`${API_URL.endpoints.menu}?type=menu`);
  }
   getpopular(): Observable<MenuSimpleCard[]> {
    return this.http.get<MenuSimpleCard[]>(`${API_URL.endpoints.popular}?type=popular`);
  }

  getChefs(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL.endpoints.chefs}?type=chef`);
  }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL.endpoints.blogs}?type=blog`);
  }
}
