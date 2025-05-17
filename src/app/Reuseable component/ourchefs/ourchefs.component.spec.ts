import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurshefsComponent } from './ourchefs.component';

describe('OurshefsComponent', () => {
  let component: OurshefsComponent;
  let fixture: ComponentFixture<OurshefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurshefsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurshefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
