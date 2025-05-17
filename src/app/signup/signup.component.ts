import { Component } from '@angular/core';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { RouterLink } from '@angular/router';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { TestimonalComponent } from '../testimonal/testimonal.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [TitleComponent,RouterLink,NewsletterComponent,TestimonalComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
