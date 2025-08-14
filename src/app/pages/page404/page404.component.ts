import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent,RouterLink],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {

}
