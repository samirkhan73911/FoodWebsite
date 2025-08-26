import { environment } from '../../../environments/environment';

export const API_URL = {
  baseUrl: environment.apiUrl, // Base URL for the API
  // baseUrl: 'http://localhost:3000', // Base URL for the API
  endpoints: {
    // API endpoints
    menu: '/menu',
    popular: '/popular',
    chefs: '/chef', // /cards?type=chef
    blogs: '/blog',
    // Add more endpoints as needed
  },
  // Base URL for the API
}; // Base URL for the API
