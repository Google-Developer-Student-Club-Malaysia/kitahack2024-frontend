import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormationSectionComponent } from './team-formation-section.component';

describe('TeamFormationSectionComponent', () => {
  let component: TeamFormationSectionComponent;
  let fixture: ComponentFixture<TeamFormationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamFormationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamFormationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
