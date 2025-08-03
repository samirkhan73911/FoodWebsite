import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';

@Component({
  selector: 'app-thank-youpage',
  standalone: true,
  imports: [NewsletterComponent,TitleComponent,RouterLink],
  templateUrl: './thank-youpage.component.html',
  styleUrl: './thank-youpage.component.css'
})
export class ThankYoupageComponent {

}
