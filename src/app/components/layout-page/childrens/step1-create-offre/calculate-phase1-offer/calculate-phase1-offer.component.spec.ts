import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePhase1OfferComponent } from './calculate-phase1-offer.component';

describe('CalculatePhase1OfferComponent', () => {
  let component: CalculatePhase1OfferComponent;
  let fixture: ComponentFixture<CalculatePhase1OfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePhase1OfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePhase1OfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
