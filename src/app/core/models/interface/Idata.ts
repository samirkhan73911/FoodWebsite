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
  rating: number; // Rating out of 5
}

// // 📝 Blog Interface
// export interface Blogcard{
//   id: number;
//   title: string;
//   author: string;
//   date: string;  // ISO or yyyy-mm-dd format
//   imgUrl: string;
//   content: string;
// }

// // 👨‍🍳 Chef Interface
// export interface Chefcard {
//   id: number;
//   name: string;
//   specialty: string;
//   experience: string; // e.g., "5 years"
//   imgUrl: string;
//   bio: string;
// }

// 🌐 Root Dataset (if loading full JSON file at once)
export interface FoodWebsiteData {
  menu: foodCard[];
  blogs: Blogcard[];
  chefs: Chefcard[];
}


// Shared structure for Menu & Simple cards
// export interface MenuSimpleCard {
//   id: number;
//   imgurl: string;
//   title: string;
//   descsmall: string;
//   description: string;
//   price: number;
// }

// Chef Card
export interface Chefcard {
  id: number;
  imgurl: string;
  name: string;
  links: string[];
  description: string;
}

// Blog Card
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
// Generic API response
// export interface CardApiResponse {

//   carddata?: MenuSimpleCard;
//   chefdata?: Chefcard;
//   blogdata?: Blogcard;
// }
