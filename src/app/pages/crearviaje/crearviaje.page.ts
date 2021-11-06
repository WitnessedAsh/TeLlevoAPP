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
  lon:number;
  geototal:String;
  mapRef = null;

  constructor(private loadingCtrl: LoadingController,private http: HttpClient,private api: APIService,public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router, 
    public bdlocalservice: BDLocalService,public navCtrl: NavController, public geolocation:Geolocation) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.cargarMapa();
    //this.getGeolocation();
  }

  async cargarMapa(){
    //const loading = await this.loadingCtrl.create();
    //loading.present();
    const glz = await this.geolocation.getCurrentPosition();
    const miGlz = {
      lat : glz.coords.latitude,
      lng : glz.coords.longitude
    };
    console.log(miGlz);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, {
      center: miGlz,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      //loading.dismiss();
      this.addMaker(miGlz.lat, miGlz.lng);
    });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Help'
    });
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      console.log("lat: ",this.lat, " lon:",this.lon);
    }).catch((error)=>{
      console.log("Error:", error);
    });
  }

  addVia(){
    this.bdlocalservice.guardarViaje(this.direc,this.fe,this.acom,this.sector,this.tarifa);
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
      if(this.tarifa === 0 || this.tarifa === null || this.tarifa <=0){
        vali = false;
        this.enviaralertTarifa();
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
      message: 'La tarifa no puede ser menor o igual a 0.',
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
