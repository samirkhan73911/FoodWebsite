import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

  @Input() cardType: 'menu' | 'popular' | 'chef' | 'blog' = 'menu';
  @Input() carddata: any = {};
  
  // chefdata: any = {};
  // blogdata: any = {};

  // @Input() carddata: {
  //   id: number;
  //   imgurl: string;
  //   title: string;
  //   descsmall: string;
  //   description: string;
  //   price: number;
  // } = {
  //   id: 0,
  //   imgurl: '',
  //   title: '',
  //   descsmall: '',
  //   description: '',
  //   price: 0,
  // };

  // @Input() chefdata: {
  //   id: number;
  //   imgurl: string;
  //   name: string;
  //   links: string[];
  //   description: string;
  // } = {
  //   id: 0,
  //   imgurl: '',
  //   name: '',
  //   links: [],
  //   description: '',
  // };

  // @Input() blogdata: {
  //   id: number;
  //   imgurl: string;
  //   title: string;
  //   smalldescrption: string;
  //   descrption: string;
  //   link: string;
  // } = {
  //   id: 0,
  //   imgurl: '',
  //   title: '',
  //   smalldescrption: '',
  //   descrption: '',
  //   link: '',
  // };
}
// getFoodCards(type: 'menu' | 'popular') {
//   this.cardsrv.getCardsByType(type).subscribe(data => {
//     if (type === 'menu') {
//       this.menudata = data;
//     } else {
//       this.populardata = data;
//     }
//     this.cardType = type; // sets the current card type
//   });
// }

// // chefs (different structure)
// getChefs() {
//   this.cardsrv.getCardsByType('chef').subscribe(data => {
//     this.chefdata = data;
//     this.cardType = 'chef';
//   });
// }

// // blogs (different structure)
// getBlogs() {
//   this.cardsrv.getCardsByType('blog').subscribe(data => {
//     this.blogdata = data;
//     this.cardType = 'blog';
//   });
// }
