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

  @Input() cardType: 'menu' | 'simple' | 'chef' | 'blog' = 'menu';

  @Input() carddata: {
    id: number;
    imgurl: string;
    title: string;
    descsmall: string;
    description: string;
    price: number;
  } = {
    id: 0,
    imgurl: '',
    title: '',
    descsmall: '',
    description: '',
    price: 0,
  };
  
  @Input() chefdata: {
    id: number;
    imgurl: string;
    name: string;
    links: string[];
    description: string;
  } = {
    id: 0,
    imgurl: '',
    name: '',
    links: [],
    description: '',
  };

  @Input() blogdata: {
    id: number;
    imgurl: string;
    title: string;
    smalldescrption: string;
    descrption: string;
    link: string;
  } = {
    id: 0,
    imgurl: '',
    title: '',
    smalldescrption: '',
    descrption: '',
    link: '',
  };
}
