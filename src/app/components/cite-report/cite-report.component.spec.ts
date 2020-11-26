import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiteReportComponent } from './cite-report.component';

describe('CiteReportComponent', () => {
  let component: CiteReportComponent;
  let fixture: ComponentFixture<CiteReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiteReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
