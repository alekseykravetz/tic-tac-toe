import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationExamplesComponent } from './form-validation-examples.component';

describe('FormValidationExamplesComponent', () => {
  let component: FormValidationExamplesComponent;
  let fixture: ComponentFixture<FormValidationExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
