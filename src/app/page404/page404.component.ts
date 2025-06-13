import { Component } from '@angular/core';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {

}
