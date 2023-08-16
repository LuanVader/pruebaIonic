import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registro-compra',
  templateUrl: './registro-compra.page.html',
  styleUrls: ['./registro-compra.page.scss'],
})
export class RegistroCompraPage implements OnInit {
  productos:any;
  carrito:any;
  idProducto:any;
  cantidad:any;
  constructor(
    public _apiService: ApiService
  ) {
    this.getProductosCombo();
    this.getCarrito();
   } 

  ngOnInit() {
  }
  
  addProducto(){
    console.log(this.idProducto,this.cantidad);

    let data = {
      idProducto:this.idProducto,
      cantidad:this.cantidad,
      idUsuario:1
    }
    this._apiService.addProducto(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.idProducto = '';
      this.cantidad = '';
      alert('CORRECTO');
    },(error: any) => {
      console.log("ERROR ===",error);
      alert('ERROR');
    })
  }

  getProductos(){

    this._apiService.getProductos().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

  getProductosCombo(){

    this._apiService.getProductos().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.productos = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

  getCarrito(){

    this._apiService.getCarrito().subscribe((res:any) => {
      console.log("SUCCESS carrito ===",res);
      this.carrito = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

  deleteCarrito(id:any){
    this._apiService.deleteCarrito(id).subscribe((res:any) => {
      console.log("SUCCESS carrito ===",res);
      this.getCarrito();
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }
  
  comprar(){
    this._apiService.comprar().subscribe((res:any) => {
      console.log("SUCCESS historico ===",res);
      this.idProducto = '';
      this.cantidad = '';
      this.getCarrito();
      
      alert("Se generó la compra");

    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

}
