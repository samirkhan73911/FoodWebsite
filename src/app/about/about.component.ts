import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { TitleComponent } from "../Reuseable component/title/title.component";
import { OurshefsComponent } from "../Reuseable component/ourchefs/ourchefs.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, OurshefsComponent,CarouselModule],
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
