import { environment } from "../../../environments/environment";


export const API_URL = {
    baseUrl: environment.apiUrl, // Base URL for the API
    endpoints:
    {
        // API endpoints
        menu: '/menu',
        popular: '/popular',
        blogs: '/blogs',
        chefs: '/chefs',
        // Add more endpoints as needed
    }
     // Base URL for the API
}; // Base URL for the API