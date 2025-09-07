// src/app/models/food.models.ts

// 🍽️ Menu Item Interface
export interface foodCard {
  id: number;
  imgurl: string;
  title: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Other';
  description: string;
  descsmall: string;
  price: number;
  isAvailable: boolean;
  rating: number; 
}


export interface FoodWebsiteData {
  menu: foodCard[];
  blogs: Blogcard[];
  chefs: Chefcard[];
}

export interface Chefcard {
  id: number;
  imgurl: string;
  name: string;
  links: string[];
  description: string;
}

export interface Blogcard {
  id: number;
  imgurl: string;
  title: string;
  smalldescrption: string;
  descrption: string;
  link: string;
}

export interface Popular {
  id: number;
}

export interface CartItem {
     id: number;
  imgurl: string;
  title: string;
  price: number;
   descsmall: string;
  rating: number;
  quantity: number;
  total: number;
}