import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CorsRequest } from 'cors';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    // this.headers.append('Accept','application/json');
    // this.headers.append('Content-Type','application/json');
    // this.headers.append('Access-Control-Allow-Credentials', 'true');
    
  }

  addProducto(data: any){
    console.log(data);
    
    return this.http.post("http://localhost/carrito/backend/setCarrito.php",data);
  }

  getProductos(){
    
    return this.http.get("http://localhost/carrito/backend/getProductos.php");
  }

  getCarrito(){
    
    return this.http.get("http://localhost/carrito/backend/getCarrito.php");
  }
  
  deleteCarrito(id:any){
    
    return this.http.delete("http://localhost/carrito/backend/deleteCarrito.php?id="+id);
  }
  
  comprar(){
    
    return this.http.get("http://localhost/carrito/backend/createHistorico.php");
  }

  ventas(){
    
    return this.http.get("http://localhost/carrito/backend/getVentas.php");
  }

  ventasDetalle(id:any){
    
    return this.http.get("http://localhost/carrito/backend/getVentasDetalle.php?id="+id);
  }
}
