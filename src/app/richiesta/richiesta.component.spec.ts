import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaComponent } from './richiesta.component';

describe('RichiestaComponent', () => {
  let component: RichiestaComponent;
  let fixture: ComponentFixture<RichiestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
