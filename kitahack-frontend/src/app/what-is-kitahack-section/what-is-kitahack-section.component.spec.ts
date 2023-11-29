import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatiskitahackSectionComponent } from './what-is-kitahack-section.component';

describe('WhatiskitahackSectionComponent', () => {
  let component: WhatiskitahackSectionComponent;
  let fixture: ComponentFixture<WhatiskitahackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatiskitahackSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatiskitahackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
