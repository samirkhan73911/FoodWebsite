import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from '../../core/services/encryption.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

 router=inject(Router);
 ensrv=inject(EncryptionService);
  @Input() cardType: 'menu' | 'popular' | 'chef' | 'blog' = 'menu';
  @Input() carddata: any = {};

  
itemdetailspage(id:number) {
  // this.router.navigate(['/productdetailspage',id]);
     const encid=this.goToDetails(id)
   this.router.navigate(['/productdetailspage', encid]);
}
blogdetailspage(id:number) {
  // this.router.navigate(['/blogsdetailspage',id]);
   const encid=this.goToDetails(id)
   this.router.navigate(['/blogsdetailspage', encid]);
}

    goToDetails(id: number) {
  const encryptedId = encodeURIComponent(this.ensrv.encrypt(id.toString()));
  return encryptedId
  // this.router.navigate(['/blogsdetailspage', encryptedId]);
}

}