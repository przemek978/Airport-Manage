import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaneComponent } from './addplane.component';

describe('AddplaneComponent', () => {
  let component: AddplaneComponent;
  let fixture: ComponentFixture<AddplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
