import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialClockComponent } from './radial-clock.component';

describe('RadialClockComponent', () => {
  let component: RadialClockComponent;
  let fixture: ComponentFixture<RadialClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
