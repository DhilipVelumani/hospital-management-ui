import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistChennaiComponent } from './dentist-chennai.component';

describe('DentistChennaiComponent', () => {
  let component: DentistChennaiComponent;
  let fixture: ComponentFixture<DentistChennaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistChennaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
