import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycomponentAdminComponent } from './lazycomponent-admin.component';

describe('LazycomponentAdminComponent', () => {
  let component: LazycomponentAdminComponent;
  let fixture: ComponentFixture<LazycomponentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazycomponentAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazycomponentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
