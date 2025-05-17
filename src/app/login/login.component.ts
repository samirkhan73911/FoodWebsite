import { Component } from '@angular/core';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { RouterLink } from '@angular/router';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { TestimonalComponent } from "../testimonal/testimonal.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TitleComponent, RouterLink, NewsletterComponent, TestimonalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
