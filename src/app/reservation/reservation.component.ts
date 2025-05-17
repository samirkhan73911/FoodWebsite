import { Component } from '@angular/core';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { TestimonalComponent } from '../testimonal/testimonal.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [TitleComponent,TestimonalComponent,NewsletterComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

}
