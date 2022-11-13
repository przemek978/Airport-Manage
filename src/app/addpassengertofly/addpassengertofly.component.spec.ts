import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpassengertoflyComponent } from './addpassengertofly.component';

describe('AddpassengertoflyComponent', () => {
  let component: AddpassengertoflyComponent;
  let fixture: ComponentFixture<AddpassengertoflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpassengertoflyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpassengertoflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
