import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRetailerComponent } from './action-retailer.component';

describe('ActionRetailerComponent', () => {
  let component: ActionRetailerComponent;
  let fixture: ComponentFixture<ActionRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
