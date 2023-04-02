import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditslotComponent } from './editslot.component';

describe('EditslotComponent', () => {
  let component: EditslotComponent;
  let fixture: ComponentFixture<EditslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
