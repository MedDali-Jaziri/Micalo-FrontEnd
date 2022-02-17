import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoSettComponent } from './company-info-sett.component';

describe('CompanyInfoSettComponent', () => {
  let component: CompanyInfoSettComponent;
  let fixture: ComponentFixture<CompanyInfoSettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoSettComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoSettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
