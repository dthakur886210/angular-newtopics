import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycomponentUserComponent } from './lazycomponent-user.component';

describe('LazycomponentUserComponent', () => {
  let component: LazycomponentUserComponent;
  let fixture: ComponentFixture<LazycomponentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazycomponentUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazycomponentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
