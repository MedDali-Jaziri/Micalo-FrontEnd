import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePhase2OffreComponent } from './calculate-phase2-offre.component';

describe('CalculatePhase2OffreComponent', () => {
  let component: CalculatePhase2OffreComponent;
  let fixture: ComponentFixture<CalculatePhase2OffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePhase2OffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePhase2OffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
