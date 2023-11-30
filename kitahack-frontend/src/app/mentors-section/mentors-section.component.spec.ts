import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsSectionComponent } from './mentors-section.component';

describe('MentorsSectionComponent', () => {
  let component: MentorsSectionComponent;
  let fixture: ComponentFixture<MentorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
