import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blogscard',
  standalone: true,
  imports: [],
  templateUrl: './blogscard.component.html',
  styleUrl: './blogscard.component.css'
})
export class BlogscardComponent {

    @Input() blogdata: { imgurl: string; title: string; ourblogdescrption:string, carddescrption: string,link:string }={
      imgurl: '',
      title: '',
      ourblogdescrption: '',
      carddescrption: '',
      link: ''
    }
}
