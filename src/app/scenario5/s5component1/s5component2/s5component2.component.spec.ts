import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5component2Component } from './s5component2.component';

describe('S5component2Component', () => {
  let component: S5component2Component;
  let fixture: ComponentFixture<S5component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
