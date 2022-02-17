import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkerEspaceComponent } from './add-worker-espace.component';

describe('AddWorkerEspaceComponent', () => {
  let component: AddWorkerEspaceComponent;
  let fixture: ComponentFixture<AddWorkerEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkerEspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkerEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
