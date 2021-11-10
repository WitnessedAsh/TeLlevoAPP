import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { Marker } from 'mapbox-gl';

declare var google;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.page.html',
  styleUrls: ['./googlemaps.page.scss'],
})
export class GooglemapsPage implements OnInit {
  mapRef = null;
  lat: any;
  lng: any;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) {

  }
  ngAfterViewInit(){
    this.geolocationNative();
  }

  ngOnInit() {
    this.loadMap().catch((error) => {
      console.log('Error getting location', error);
    });
  }

  async loadMap() {
    const glz = await this.geolocation.getCurrentPosition();
    const Miglz = {
      lat : glz.coords.latitude,
      lng : glz.coords.longitude
    }
    console.log("Miglz: " + Miglz);
    const loading = await this.loadingCtrl.create();
    loading.present();
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat:-33.0336892, lng:-71.5331633};
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      mapEle.classList.add('show-map');
      this.userMaker(Miglz.lat,Miglz.lng);
      this.addMaker(myLatLng.lat, myLatLng.lng);
    });
  }

  private async userMaker(lat:number,lng:number){
    const marker = new google.maps.Marker({
      draggable: true,
      position: { lat, lng },
      map: this.mapRef,
      title: 'user'
    })
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      //draggable: true,
      position: { lat, lng },
      map: this.mapRef,
      title: 'Duoc Viña'
    });
  }

  private async getLocation() {
    const glz = await this.geolocation.getCurrentPosition();
    console.log(glz);
    return {
      lat: glz.coords.latitude,
      lng: glz.coords.longitude,
    };
  }

  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{
        console.log(geoposition);
    });
  }

}