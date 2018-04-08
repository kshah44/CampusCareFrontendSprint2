import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerHomepageComponent } from './consumer-homepage.component';

describe('ConsumerHomepageComponent', () => {
  let component: ConsumerHomepageComponent;
  let fixture: ComponentFixture<ConsumerHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
