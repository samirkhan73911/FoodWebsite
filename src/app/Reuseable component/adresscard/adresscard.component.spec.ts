import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresscardComponent } from './adresscard.component';

describe('AdresscardComponent', () => {
  let component: AdresscardComponent;
  let fixture: ComponentFixture<AdresscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdresscardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdresscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
