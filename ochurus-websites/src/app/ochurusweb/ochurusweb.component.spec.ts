import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OchuruswebComponent } from './ochurusweb.component';

describe('OchuruswebComponent', () => {
  let component: OchuruswebComponent;
  let fixture: ComponentFixture<OchuruswebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OchuruswebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OchuruswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
