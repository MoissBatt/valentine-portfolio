import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayThrallComponent } from './cosplay-thrall.component';

describe('CosplayThrallComponent', () => {
  let component: CosplayThrallComponent;
  let fixture: ComponentFixture<CosplayThrallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayThrallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayThrallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
