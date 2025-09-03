import { Component, inject } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { CardComponent } from '../../Reuseable component/card/card.component';
import { Chefcard } from '../../core/models/interface/Idata';
import { CardServiceService } from '../../core/services/card-service.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, CarouselModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private cardsrv = inject(CardServiceService);

  chefdata: Chefcard[] = [];

  ngOnInit() {
    this.getchefs();
  }

  getchefs() {
    this.cardsrv.getChefs().subscribe({
      next: (res) => {
      this.chefdata = res;
      this.chefdata = this.chefdata.slice(0, 4);
      },
      error: (err) => {
        console.error("Error fetching chefs:", err);
      }
    });
  }
}
