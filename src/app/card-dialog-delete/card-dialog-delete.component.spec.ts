import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDialogDeleteComponent } from './card-dialog-delete.component';

describe('CardDialogDeleteComponent', () => {
  let component: CardDialogDeleteComponent;
  let fixture: ComponentFixture<CardDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
