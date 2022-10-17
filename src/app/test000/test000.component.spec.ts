import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test000Component } from './test000.component';

describe('Test000Component', () => {
  let component: Test000Component;
  let fixture: ComponentFixture<Test000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test000Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
