import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayTalanjiComponent } from './cosplay-talanji.component';

describe('CosplayTalanjiComponent', () => {
  let component: CosplayTalanjiComponent;
  let fixture: ComponentFixture<CosplayTalanjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayTalanjiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayTalanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
