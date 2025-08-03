import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [TitleComponent,RouterLink,NewsletterComponent,TestimonalComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
