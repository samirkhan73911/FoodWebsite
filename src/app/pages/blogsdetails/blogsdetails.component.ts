import { EncryptionService } from '../../core/services/encryption.service';
import { Blogcard } from '../../core/models/interface/Idata';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardServiceService } from '../../core/services/card-service.service';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';

@Component({
  selector: 'app-blogsdetails',
  standalone: true,
  imports: [NewsletterComponent, TestimonalComponent, TitleComponent],
  templateUrl: './blogsdetails.component.html',
  styleUrl: './blogsdetails.component.css',
})
export class BlogsdetailsComponent {
  max = 5;
  rate: number = 0;

  BlogId!: number;
  Blog: Blogcard | null = null;
  constructor(
    private route: ActivatedRoute,
    private cardsrv: CardServiceService,
    private ensrv: EncryptionService,
    private router: Router
  ) {}
  cryptoSrv = inject(EncryptionService);

  ngOnInit(): void {
    this.blogsdecryption();
  }

  blogsdecryption() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        this.BlogId = Number(
          this.cryptoSrv.decrypt(decodeURIComponent(id.toString()))
        );
        this.getBlogDetails(this.BlogId);
      } catch (error) {
        this.router.navigate(['/our-blogs']);
      }
    }
  }

  getBlogDetails(id: number) {
    this.cardsrv.getBlogById(id).subscribe({
      next: (res) => {
        this.Blog = res;
        window.scrollTo(0, 0);
      },
      error: (err) => {
        console.error('Error fetching Blog:', err);
      },
    });
  }
}
