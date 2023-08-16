import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroCompraPage } from './registro-compra.page';

describe('RegistroCompraPage', () => {
  let component: RegistroCompraPage;
  let fixture: ComponentFixture<RegistroCompraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
