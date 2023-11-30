import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCriteriaComponent } from './submission-criteria.component';

describe('SubmissionCriteriaComponent', () => {
  let component: SubmissionCriteriaComponent;
  let fixture: ComponentFixture<SubmissionCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionCriteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmissionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
