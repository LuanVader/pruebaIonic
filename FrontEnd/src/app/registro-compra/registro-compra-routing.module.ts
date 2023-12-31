import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCompraPage } from './registro-compra.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCompraPageRoutingModule {}
