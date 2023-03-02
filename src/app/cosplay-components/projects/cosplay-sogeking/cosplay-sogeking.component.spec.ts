import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplaySogekingComponent } from './cosplay-sogeking.component';

describe('CosplaySogekingComponent', () => {
  let component: CosplaySogekingComponent;
  let fixture: ComponentFixture<CosplaySogekingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplaySogekingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplaySogekingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
