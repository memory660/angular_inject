import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInjectSimpleComponent } from './comp-inject-simple.component';

describe('CompInjectSimpleComponent', () => {
  let component: CompInjectSimpleComponent;
  let fixture: ComponentFixture<CompInjectSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInjectSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInjectSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
