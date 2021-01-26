import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRewardsComponent } from './total-rewards.component';

describe('TotalRewardsComponent', () => {
  let component: TotalRewardsComponent;
  let fixture: ComponentFixture<TotalRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
