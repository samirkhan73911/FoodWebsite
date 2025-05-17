import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ourshefs',
  standalone: true,
  imports: [],
  templateUrl: './ourchefs.component.html',
  styleUrl: './ourchefs.component.css'
})
export class OurshefsComponent {
  @Input() chefdata: { imgurl: string; name: string;links:string[], description: string }={
    imgurl: '',
    name: '',
    links: [],
    description: ''
  };
}
