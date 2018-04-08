import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProviderComponent } from './signup-provider.component';

describe('SignupProviderComponent', () => {
  let component: SignupProviderComponent;
  let fixture: ComponentFixture<SignupProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
