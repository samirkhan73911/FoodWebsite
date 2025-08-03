import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYoupageComponent } from './thank-youpage.component';

describe('ThankYoupageComponent', () => {
  let component: ThankYoupageComponent;
  let fixture: ComponentFixture<ThankYoupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankYoupageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
