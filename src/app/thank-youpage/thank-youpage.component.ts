import { Component } from '@angular/core';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thank-youpage',
  standalone: true,
  imports: [NewsletterComponent,TitleComponent,RouterLink],
  templateUrl: './thank-youpage.component.html',
  styleUrl: './thank-youpage.component.css'
})
export class ThankYoupageComponent {

}
