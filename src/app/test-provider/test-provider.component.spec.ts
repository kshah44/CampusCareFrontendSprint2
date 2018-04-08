import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProviderComponent } from './test-provider.component';

describe('TestProviderComponent', () => {
  let component: TestProviderComponent;
  let fixture: ComponentFixture<TestProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
