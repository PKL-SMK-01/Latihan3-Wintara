import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnployeeEditComponent } from './enployee-edit.component';

describe('EnployeeEditComponent', () => {
  let component: EnployeeEditComponent;
  let fixture: ComponentFixture<EnployeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnployeeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
