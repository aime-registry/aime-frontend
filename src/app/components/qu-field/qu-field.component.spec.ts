import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuFieldComponent } from './qu-field.component';

describe('QuFieldComponent', () => {
  let component: QuFieldComponent;
  let fixture: ComponentFixture<QuFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
