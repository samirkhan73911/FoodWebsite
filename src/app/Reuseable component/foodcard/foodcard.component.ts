import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foodcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent {
@Input() fooddata:string[]=[]
@Input() isMenuCard:boolean=true
}
