import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayTyrandeComponent } from './cosplay-tyrande.component';

describe('CosplayTyrandeComponent', () => {
  let component: CosplayTyrandeComponent;
  let fixture: ComponentFixture<CosplayTyrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayTyrandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayTyrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
