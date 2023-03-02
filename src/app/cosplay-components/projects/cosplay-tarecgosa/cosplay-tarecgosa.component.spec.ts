import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayTarecgosaComponent } from './cosplay-tarecgosa.component';

describe('CosplayTarecgosaComponent', () => {
  let component: CosplayTarecgosaComponent;
  let fixture: ComponentFixture<CosplayTarecgosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayTarecgosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayTarecgosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
