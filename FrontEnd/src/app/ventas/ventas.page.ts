import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  ventas:any;
  ventasDetalle:any;
  constructor(
    public _apiService: ApiService
  ) { 
    this.getVentas();
  }

  ngOnInit() {
  }

  getVentas(){

    this._apiService.ventas().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.ventas = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

  verDetalle(id:any){

    this._apiService.ventasDetalle(id).subscribe((res:any) => {
      console.log("SUCCESS detalle ===",res);
      this.ventasDetalle = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

}
