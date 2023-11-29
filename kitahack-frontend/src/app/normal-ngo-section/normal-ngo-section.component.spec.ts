import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalNgoSectionComponent } from './normal-ngo-section.component';

describe('NormalNgoSectionComponent', () => {
  let component: NormalNgoSectionComponent;
  let fixture: ComponentFixture<NormalNgoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalNgoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalNgoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
