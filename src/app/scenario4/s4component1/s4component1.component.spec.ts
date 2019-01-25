import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4component1Component } from './s4component1.component';

describe('S4component1Component', () => {
  let component: S4component1Component;
  let fixture: ComponentFixture<S4component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
