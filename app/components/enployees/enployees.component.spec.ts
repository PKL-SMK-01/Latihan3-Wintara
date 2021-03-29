import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnployeesComponent } from './enployees.component';

describe('EnployeesComponent', () => {
  let component: EnployeesComponent;
  let fixture: ComponentFixture<EnployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
