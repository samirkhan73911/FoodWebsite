import { Component, Input} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
@Input() title?: string;
@Input() page1?: string;
@Input() page2?: string;
@Input() link?: string;
// @Input() link2?: string;
}
