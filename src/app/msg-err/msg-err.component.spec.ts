import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgErrComponent } from './msg-err.component';

describe('MsgErrComponent', () => {
  let component: MsgErrComponent;
  let fixture: ComponentFixture<MsgErrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgErrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
