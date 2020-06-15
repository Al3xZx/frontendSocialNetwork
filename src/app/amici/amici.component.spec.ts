import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiciComponent } from './amici.component';

describe('AmiciComponent', () => {
  let component: AmiciComponent;
  let fixture: ComponentFixture<AmiciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
