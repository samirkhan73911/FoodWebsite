import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TitleComponent, RouterLink, NewsletterComponent, TestimonalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
