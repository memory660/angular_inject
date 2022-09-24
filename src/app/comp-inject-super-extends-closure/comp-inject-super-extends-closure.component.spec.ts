import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInjectSuperExtendsClosureComponent } from './comp-inject-super-extends-closure.component';

describe('CompInjectSuperExtendsClosureComponent', () => {
  let component: CompInjectSuperExtendsClosureComponent;
  let fixture: ComponentFixture<CompInjectSuperExtendsClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInjectSuperExtendsClosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInjectSuperExtendsClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
