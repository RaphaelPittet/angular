import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatchComponent } from './single-catch.component';

describe('SingleCatchComponent', () => {
  let component: SingleCatchComponent;
  let fixture: ComponentFixture<SingleCatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
