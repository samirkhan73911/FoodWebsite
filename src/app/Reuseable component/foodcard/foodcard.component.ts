import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foodcard',
  standalone: true,
  imports: [],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent {
@Input() fooddata:string[]=[]
}
