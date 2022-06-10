import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayPbComponent } from './cosplay-pb.component';

describe('CosplayPbComponent', () => {
  let component: CosplayPbComponent;
  let fixture: ComponentFixture<CosplayPbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayPbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
