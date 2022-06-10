import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplaySteampunkComponent } from './cosplay-steampunk.component';

describe('CosplaySteampunkComponent', () => {
  let component: CosplaySteampunkComponent;
  let fixture: ComponentFixture<CosplaySteampunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplaySteampunkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplaySteampunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
