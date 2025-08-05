import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { CardComponent } from "../../Reuseable component/card/card.component";
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, CarouselModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  //  chefdata: { imgurl: string; name: string;links:string[], description: string }={
  //   imgurl: '',
  //   name: '',
  //   links: [],
  //   description: ''
  // };

}
