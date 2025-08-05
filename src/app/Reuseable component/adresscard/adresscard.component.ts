import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-adresscard',
  standalone: true,
  imports: [],
  templateUrl: './adresscard.component.html',
  styleUrl: './adresscard.component.css',
})
export class AdresscardComponent {
  @Input() type: 'social' | 'simple'='simple';
  @Input() adressdata: {
    title: string;
    iconurl: string;
    carddata: string;
  } = {
    title: '',
    iconurl: '',
    carddata: '',
  };
}
