import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CildComponent } from './cild.component';

describe('CildComponent', () => {
  let component: CildComponent;
  let fixture: ComponentFixture<CildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
