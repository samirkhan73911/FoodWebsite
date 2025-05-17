import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogscardComponent } from './blogscard.component';

describe('BlogscardComponent', () => {
  let component: BlogscardComponent;
  let fixture: ComponentFixture<BlogscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogscardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
