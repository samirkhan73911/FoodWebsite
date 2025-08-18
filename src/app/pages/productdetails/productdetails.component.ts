import { Component } from '@angular/core';
import { TitleComponent } from "../../Reuseable component/title/title.component";
import { NewsletterComponent } from "../../component/newsletter/newsletter.component";

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

}
