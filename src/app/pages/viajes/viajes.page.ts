import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {
  
  user:any;
  users:any;
  viaje:any;
  viajes:any;
  visec:String;

  constructor(private api: APIService,public alerta:AlertController,
    private activeroute: ActivatedRoute, private router: Router) { }


  ionViewWillEnter(){
    this.getViajes();
    this.filtroVia();
  }

  ngOnInit() {
  }
  
  async buscar(){
    let cAlerta = await this.alerta.create({
      header: 'Buscando',
      message: 'Se mostraran los viajes disponibles',
      buttons: ['Siguiente']
    });
    await cAlerta.present()
  }


  btnVer(){
    if(this.visec === 'Todos'){
      this.getViajes();
    }else{
      this.filtroVia();
    }
    console.log(this.visec);
  }

  filtroVia(){
    this.api.getViaje(this.visec).subscribe((data)=>{
      this.viajes=data;
    })
  }
  
  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    })
  }

  volver(){
    this.router.navigate(["home/viajes"])
  }

}
