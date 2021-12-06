import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Viaje } from 'src/app/interfaces/viaje';
import { APIService } from 'src/app/services/api.service';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { BDLocalService } from 'src/app/services/bdlocal.service';
import { google } from 'google-maps';

declare var google;

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
  tarifa:number;
  
  viaje:any={
    viDireccion:"",
    viFecha:null,
    viAcompa:null,
    viSector:"",
    viPrecio:null
  }

  lat:number;
  lng:number;
  geototal:String;
  mapRef = null;
  selecor: any;

  constructor(private loadingCtrl: LoadingController,private http: HttpClient,private api: APIService,public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router, 
    public bdlocalservice: BDLocalService,public navCtrl: NavController, public geolocation:Geolocation) {
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state){
          this.lng = this.router.getCurrentNavigation().extras.state.lng;
          this.lat = this.router.getCurrentNavigation().extras.state.lat;
          //console.log("nuser: ", this.nuser);
        }
      });
     }

  ngOnInit() {
    console.log("SELECOR EN CREARVIAJE:" + this.lng);
    console.log("LAT: " + this.lat)
    this.bdlocalservice.getViajes();
  }

  ngAfterViewInit(){
    //this.getGeolocation();
  }

  addVia(){
    this.bdlocalservice.guardarViaje(this.direc,this.fe,this.acom,this.sector,this.tarifa);
    console.log(this.direc,this.fe,this.acom,this.sector);
  }

  mapa(){
    this.router.navigate(["mapbox"]);
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
    || typeof this.acom === 'undefined' || typeof this.sector === 'undefined' || typeof this.tarifa === 'undefined'){
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
      if(this.tarifa === 0 || this.tarifa === null || this.tarifa <=0 || this.tarifa > 2000){
        vali = false;
        this.enviaralertTarifa();
      }
      if(this.acom === 0 || this.acom === null){
        vali = false;
        this.enviaralertAcom();
      }
      if(this.lng === 0 && this.lat === 0 || this.lng === undefined && this.lat === undefined){
        vali = false;
        this.enviaralertLNGLAT();
      }
    }
    if(vali){
      this.crearViaje();
      this.addVia();
      console.log("SELECOR EN CREARVIAJE:" + this.lng);
      console.log("LAT: " + this.lat);
    }
  }

  crearViaje(){
    const viaje = {
      viDireccion:this.direc,
      viLng: this.lng,
      viLat: this.lat,
      viFecha:this.fe,
      viAcompa:this.acom,
      viSector:this.sector,
      viPrecio:this.tarifa
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

  async enviaralertTarifa(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'La tarifa no puede ser menor o igual a 0 o mayor a 2000.',
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

  async enviaralertLNGLAT(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'No se encuentran coordenadas',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }


  volver(){
    this.router.navigate(["home"])
  }





}
