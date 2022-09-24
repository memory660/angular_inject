import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInjectReducComplexityClosureComponent } from './comp-inject-reduc-complexity-closure.component';

describe('CompInjectReducComplexityClosureComponent', () => {
  let component: CompInjectReducComplexityClosureComponent;
  let fixture: ComponentFixture<CompInjectReducComplexityClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInjectReducComplexityClosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInjectReducComplexityClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
