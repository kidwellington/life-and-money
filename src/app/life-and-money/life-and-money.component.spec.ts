import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAndMoneyComponent } from './life-and-money.component';

describe('LifeAndMoneyComponent', () => {
  let component: LifeAndMoneyComponent;
  let fixture: ComponentFixture<LifeAndMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeAndMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAndMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
