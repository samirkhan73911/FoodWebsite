import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { TestimonalComponent } from '../testimonal/testimonal.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink,TitleComponent,NewsletterComponent,TestimonalComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

}
