import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plato4Component } from './plato4.component';

describe('Plato4Component', () => {
  let component: Plato4Component;
  let fixture: ComponentFixture<Plato4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plato4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Plato4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
