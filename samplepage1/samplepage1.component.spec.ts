import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samplepage1Component } from './samplepage1.component';

describe('Samplepage1Component', () => {
  let component: Samplepage1Component;
  let fixture: ComponentFixture<Samplepage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Samplepage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Samplepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
