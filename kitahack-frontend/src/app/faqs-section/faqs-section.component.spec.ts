import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsSectionComponent } from './faqs-section.component';

describe('FaqsSectionComponent', () => {
  let component: FaqsSectionComponent;
  let fixture: ComponentFixture<FaqsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
