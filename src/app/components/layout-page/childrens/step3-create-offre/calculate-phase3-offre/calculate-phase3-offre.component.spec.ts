import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePhase3OffreComponent } from './calculate-phase3-offre.component';

describe('CalculatePhase3OffreComponent', () => {
  let component: CalculatePhase3OffreComponent;
  let fixture: ComponentFixture<CalculatePhase3OffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePhase3OffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePhase3OffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
