import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcialistComponent } from './spcialist.component';

describe('SpcialistComponent', () => {
  let component: SpcialistComponent;
  let fixture: ComponentFixture<SpcialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpcialistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpcialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
