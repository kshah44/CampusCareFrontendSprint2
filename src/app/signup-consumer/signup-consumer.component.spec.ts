import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupConsumerComponent } from './signup-consumer.component';

describe('SignupConsumerComponent', () => {
  let component: SignupConsumerComponent;
  let fixture: ComponentFixture<SignupConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
