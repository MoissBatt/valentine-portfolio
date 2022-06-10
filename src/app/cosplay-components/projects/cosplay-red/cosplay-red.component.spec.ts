import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayRedComponent } from './cosplay-red.component';

describe('CosplayRedComponent', () => {
  let component: CosplayRedComponent;
  let fixture: ComponentFixture<CosplayRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
