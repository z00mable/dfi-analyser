import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyserPageComponent } from './analyser-page.component';

describe('AnalyserPageComponent', () => {
  let component: AnalyserPageComponent;
  let fixture: ComponentFixture<AnalyserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
