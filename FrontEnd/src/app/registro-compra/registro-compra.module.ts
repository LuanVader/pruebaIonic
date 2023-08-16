import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCompraPageRoutingModule } from './registro-compra-routing.module';

import { RegistroCompraPage } from './registro-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCompraPageRoutingModule
  ],
  declarations: [RegistroCompraPage]
})
export class RegistroCompraPageModule {}
