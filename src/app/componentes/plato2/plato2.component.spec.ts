import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plato2Component } from './plato2.component';

describe('Plato2Component', () => {
  let component: Plato2Component;
  let fixture: ComponentFixture<Plato2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plato2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Plato2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
