import { Component } from '@angular/core';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { AdresscardComponent } from "../../Reuseable component/adresscard/adresscard.component";


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TitleComponent, AdresscardComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
