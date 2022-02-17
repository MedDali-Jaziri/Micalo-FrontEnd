import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringOfWorksComponent } from './monitoring-of-works.component';

describe('MonitoringOfWorksComponent', () => {
  let component: MonitoringOfWorksComponent;
  let fixture: ComponentFixture<MonitoringOfWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringOfWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringOfWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
