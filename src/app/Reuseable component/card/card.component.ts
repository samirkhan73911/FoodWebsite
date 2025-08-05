import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() isMenuCard: boolean = true;
  @Input() cardType: 'menu' | 'simple' | 'chef' | 'blog' = 'menu';

  @Input() fooddata: {
    imgurl: string;
    title: string;
    descsmall: string;
    description: string;
    price: number;
  } = {
    imgurl: '',
    title: '',
    descsmall: '',
    description: '',
    price: 0,
  };
  
  @Input() chefdata: {
    imgurl: string;
    name: string;
    links: string[];
    description: string;
  } = {
    imgurl: '',
    name: '',
    links: [],
    description: '',
  };

  @Input() blogdata: {
    imgurl: string;
    title: string;
    ourblogdescrption: string;
    carddescrption: string;
    link: string;
  } = {
    imgurl: '',
    title: '',
    ourblogdescrption: '',
    carddescrption: '',
    link: '',
  };
}
