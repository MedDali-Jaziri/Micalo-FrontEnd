import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoCompanyComponent } from './edit-info-company.component';

describe('EditInfoCompanyComponent', () => {
  let component: EditInfoCompanyComponent;
  let fixture: ComponentFixture<EditInfoCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfoCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
