import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registro Compras', url: '/registro-compra', icon: 'paper-plane' },
    { title: 'Ventas', url: '/ventas', icon: 'paper-plane' }
  ];
  constructor() {}
}
