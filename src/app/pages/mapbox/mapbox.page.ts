import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.page.html',
  styleUrls: ['./mapbox.page.scss'],
})
export class MapboxPage implements OnInit {

  constructor(private activeroute: ActivatedRoute,private router:Router, private geolocation:Geolocation) { 
  }
  mapa:Mapboxgl.Map;
  lat : any;
  lng : any;

  async ngOnInit() {
    const glz = await this.geolocation.getCurrentPosition();
    this.lng = glz.coords.longitude;
    this.lat = glz.coords.latitude;
    //console.log("Marcador Dos GLZ: ",this.lat,this.lng);
  (Mapboxgl as any).accessToken = environment.mapboxKey;
 this.mapa = new Mapboxgl.Map({
  container: 'mapa',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.53304334046946,-33.03384594301684],
  zoom: 16.5
  });
  this.marcador(-71.53304334046946,-33.03384594301684);

  

  }

  marcador(lng: number, lat:number){
    const mensaje = new Mapboxgl.Popup().setHTML('<h3>Destino</h3><p>Seleccionar Destino</p>');
    const marker = new Mapboxgl.Marker({
      draggable: true,
    }).setLngLat([lng,lat])
    .setPopup(mensaje)
    .addTo(this.mapa);
    marker.on('dragend',()=>{
      console.log(marker.getLngLat());
    });
  }

  async marcadorDos(lng: number, lat:number){
    const mensaje = new Mapboxgl.Popup().setHTML('<h3>Ubicación</h3><p>Tú Ubicación</p>');
    const marker = new Mapboxgl.Marker({
    draggable: true,
    }).setLngLat([lng,lat])
    .setPopup(mensaje)
    .addTo(this.mapa);
    marker.on('dragend',()=>{
    console.log(marker.getLngLat());
    });
  }

  selecor(){
    let NavigationExtras: NavigationExtras={
      state:{lng: this.lng, lat: this.lat}
    };
    this.router.navigate(["/crearviaje"],NavigationExtras)
    console.log("***selecor:***" + NavigationExtras)
  }

}
