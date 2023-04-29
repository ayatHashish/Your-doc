import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpecialistesComponent } from './all-specialistes.component';

describe('AllSpecialistesComponent', () => {
  let component: AllSpecialistesComponent;
  let fixture: ComponentFixture<AllSpecialistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSpecialistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSpecialistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
