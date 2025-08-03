import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { BooktableComponent } from "../booktable/booktable.component";


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [TitleComponent, TestimonalComponent, NewsletterComponent, BooktableComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

}
