import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalOfExecutionFilesComponent } from './approval-of-execution-files.component';

describe('ApprovalOfExecutionFilesComponent', () => {
  let component: ApprovalOfExecutionFilesComponent;
  let fixture: ComponentFixture<ApprovalOfExecutionFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalOfExecutionFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalOfExecutionFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
