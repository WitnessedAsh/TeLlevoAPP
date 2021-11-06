import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.page.html',
  styleUrls: ['./googlemaps.page.scss'],
})
export class GooglemapsPage implements OnInit {
  mapRef = null;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) {

  }
  ngAfterViewInit(){
    this.cargarMapa();
  }

  ngOnInit() {
    this.cargarMapa();
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

  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{
        console.log(geoposition);

    })
  }

}