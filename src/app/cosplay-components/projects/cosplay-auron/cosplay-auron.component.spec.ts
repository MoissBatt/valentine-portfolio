import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayAuronComponent } from './cosplay-auron.component';

describe('CosplayAuronComponent', () => {
  let component: CosplayAuronComponent;
  let fixture: ComponentFixture<CosplayAuronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayAuronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayAuronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
