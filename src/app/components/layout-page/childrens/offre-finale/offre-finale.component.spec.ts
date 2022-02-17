import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreFinaleComponent } from './offre-finale.component';

describe('OffreFinaleComponent', () => {
  let component: OffreFinaleComponent;
  let fixture: ComponentFixture<OffreFinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreFinaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
