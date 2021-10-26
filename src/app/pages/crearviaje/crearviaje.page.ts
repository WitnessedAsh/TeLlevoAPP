import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Viaje } from 'src/app/interfaces/viaje';
import { APIService } from 'src/app/services/api.service';

import { BDLocalService } from 'src/app/services/bdlocal.service';


@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {
  viajes: Viaje;
  direc:string;
  fe:Date;
  acom:number;
  sector:string;
  
  viaje:any={
    viDireccion:"",
    viFecha:null,
    viAcompa:null,
    viSector:""
  }


  constructor(private http: HttpClient,private api: APIService,public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router, 
    public bdlocalservice: BDLocalService) { }

  ngOnInit() {
  }

  addVia(){
    this.bdlocalservice.guardarViaje(this.direc,this.fe,this.acom,this.sector);
    console.log(this.direc,this.fe,this.acom,this.sector);
  }

  
  async Crear(){
    let cAlerta = await this.alerta.create({
      header: 'Creando',
      message: 'Viaje creado',
      buttons: ['Siguiente']
    });
    await cAlerta.present()
  }
  //typeof this.id === 'undefined' || 
  validar(){
    let vali: boolean=true;
    if(typeof this.direc === 'undefined' || typeof this.fe === 'undefined'
    || typeof this.acom === 'undefined' || typeof this.sector === 'undefined'){
      this.enviaralert();
      vali=false
    }else{
      if(this.direc.length === 0){
        vali = false;
        this.enviaralert();
      }
      if(this.sector === null || this.sector === 'undefined' || this.sector.length === 0){
        vali = false;
        this.enviaralertSe();
      }
      if(this.fe === null){
        vali = false;
        this.enviaralertFe();
      }
      if(this.acom === 0 || this.acom === null){
        vali = false;
        this.enviaralertAcom();
      }
    }
    if(vali){
      this.crearViaje();
      this.addVia();
    }
  }

  crearViaje(){
    const viaje = {
      viDireccion:this.direc,
      viFecha:this.fe,
      viAcompa:this.acom,
      viSector:this.sector
    }
    this.api.crearViaje(viaje).subscribe((data)=>{
      console.log(data);
    });
  }
  
  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Falta rellenar datos',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async enviaralertAcom(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Revisar acompañantes, el valor no puede ser 0 o estar vacío.',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async enviaralertFe(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Revisar la Feca, el valor no puede estar vacío.',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async enviaralertSe(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Debe seleccionar un sector',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }


  volver(){
    this.router.navigate(["home"])
  }



}