import { environment } from '../../../environments/environment';

export const API_URL = {
  baseUrl: environment.apiUrl, 
 
  endpoints: {
   
    menu: '/menu',
    popular: '/popular',
    chefs: '/chef', 
    blogs: '/blog',
    
  },
 
}; 
