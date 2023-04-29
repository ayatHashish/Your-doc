import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalqustionComponent } from './medicalqustion.component';

describe('MedicalqustionComponent', () => {
  let component: MedicalqustionComponent;
  let fixture: ComponentFixture<MedicalqustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalqustionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalqustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
