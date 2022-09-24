import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompClosureComponent } from './comp-closure.component';

describe('CompClosureComponent', () => {
  let component: CompClosureComponent;
  let fixture: ComponentFixture<CompClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompClosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
