import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInjectReducComplexityComponent } from './comp-inject-reduc-complexity.component';

describe('CompInjectReducComplexityComponent', () => {
  let component: CompInjectReducComplexityComponent;
  let fixture: ComponentFixture<CompInjectReducComplexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInjectReducComplexityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInjectReducComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
