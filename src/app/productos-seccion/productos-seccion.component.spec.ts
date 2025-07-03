import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosSeccionComponent } from './productos-seccion.component';

describe('ProductosSeccionComponent', () => {
  let component: ProductosSeccionComponent;
  let fixture: ComponentFixture<ProductosSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosSeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
