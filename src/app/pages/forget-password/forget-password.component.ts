import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';


@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink,TitleComponent,NewsletterComponent,TestimonalComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

}
