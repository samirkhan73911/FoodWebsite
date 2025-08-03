import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booktable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booktable.component.html',
  styleUrl: './booktable.component.css'
})
export class BooktableComponent {

  @Input() reservationPage :boolean=true
}
