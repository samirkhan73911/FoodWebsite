import { Component } from '@angular/core';
import { TitleComponent } from '../../Reuseable component/title/title.component';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
