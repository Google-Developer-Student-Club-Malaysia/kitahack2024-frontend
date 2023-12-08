import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToolComponent } from './link-tool.component';

describe('LinkToolComponent', () => {
  let component: LinkToolComponent;
  let fixture: ComponentFixture<LinkToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
