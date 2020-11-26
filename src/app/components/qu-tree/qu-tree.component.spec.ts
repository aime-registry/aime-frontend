import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuTreeComponent } from './qu-tree.component';

describe('QuTreeComponent', () => {
  let component: QuTreeComponent;
  let fixture: ComponentFixture<QuTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
