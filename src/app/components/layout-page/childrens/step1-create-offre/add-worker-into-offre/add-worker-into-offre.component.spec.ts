import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkerIntoOffreComponent } from './add-worker-into-offre.component';

describe('AddWorkerIntoOffreComponent', () => {
  let component: AddWorkerIntoOffreComponent;
  let fixture: ComponentFixture<AddWorkerIntoOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkerIntoOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkerIntoOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
