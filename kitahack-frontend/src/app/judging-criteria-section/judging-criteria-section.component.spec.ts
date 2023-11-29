import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgingCriteriaSectionComponent } from './judging-criteria-section.component';

describe('JudgingCriteriaSectionComponent', () => {
  let component: JudgingCriteriaSectionComponent;
  let fixture: ComponentFixture<JudgingCriteriaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgingCriteriaSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JudgingCriteriaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
