import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsModalComponent } from './mentions-modal.component';

describe('MentionsModalComponent', () => {
  let component: MentionsModalComponent;
  let fixture: ComponentFixture<MentionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
