import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { BooktableComponent } from '../../component/booktable/booktable.component';
import { CardComponent } from '../../Reuseable component/card/card.component';
import { CardServiceService } from '../../core/services/card-service.service';
import { foodCard, Blogcard } from '../../core/models/interface/Idata';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [
    TitleComponent,
    NewsletterComponent,
    TestimonalComponent,
    BooktableComponent,
    CardComponent,
  ],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.css',
})
export class OurMenuComponent {
  constructor(private cardsrv: CardServiceService) {}
  // private cardsrv = inject(CardServiceService);

  selected: string = 'Breakfast';

  menudata: foodCard[] = [];

  Breakfastdata: foodCard[] = [];
  Lunchdata: foodCard[] = [];
  Dinnerdata: foodCard[] = [];
  Drinksdata: foodCard[] = [];
  Otherdata: foodCard[] = [];

  ngOnInit() {
    this.getmenus();
  }
  ngAfterViewInit() {
    this.getelementbycategory(this.selected);
  }

  getmenus() {
    this.cardsrv.getMenus().subscribe((res: any) => {
      this.menudata = res;
      this.Breakfastdata = this.getelementbycategory('Breakfast');
      this.Lunchdata = this.getelementbycategory('Lunch');
      this.Dinnerdata = this.getelementbycategory('Dinner');
      this.Drinksdata = this.getelementbycategory('Drinks');
      this.Otherdata = this.getelementbycategory('Others');
    });
  }

  getelementbycategory(category: string) {
    return (
      this.menudata
        // .filter((item) => item.category === category && item.isAvailable === true)
        .filter((item) => item.category === category)

    );
  }
  // elementmenupage() {
  //   this.filterdata.slice(0, 8);

  // }
}
