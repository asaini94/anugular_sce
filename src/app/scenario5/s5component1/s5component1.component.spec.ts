import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5component1Component } from './s5component1.component';

describe('S5component1Component', () => {
  let component: S5component1Component;
  let fixture: ComponentFixture<S5component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
