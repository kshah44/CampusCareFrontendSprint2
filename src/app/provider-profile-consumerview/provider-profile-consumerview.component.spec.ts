import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderProfileConsumerviewComponent } from './provider-profile-consumerview.component';

describe('ProviderProfileConsumerviewComponent', () => {
  let component: ProviderProfileConsumerviewComponent;
  let fixture: ComponentFixture<ProviderProfileConsumerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderProfileConsumerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderProfileConsumerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
