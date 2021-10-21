import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root'
})
export class BDLocalService {

  aviaje: Viaje[]=[];
  private _storage: Storage | null = null;
  
  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init();
    this.getViajes();
  }
 
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
 }

  async getViajes(){
    const lviaje=await this.storage.get('aviaje');
    if(lviaje){
      this.aviaje=lviaje;
    }
  }

  guardarViaje(id: number, direc: String, fe: Date, acom: number){
    const existe=this.aviaje.find(d=>d.viID===id);
    if(!existe){
      this.aviaje.unshift({viID:id,viDireccion:direc,viFecha:fe,viAcompa:acom});
      this._storage.set('aviaje',this.aviaje);
     this.presentToast("Viaje agregado.");
    }else{
      this.presentToast("Error, el viaje ya existe.");
    }
  }

  //addViaje(viaje: Viaje):void {
  //  this.aViajes.unshift(viaje);
  //  let viajess
  //  if (localStorage.getItem('aViajes') === null){
  //    viajess = [];
  //    viajess.unshift(viaje);
  //    localStorage.setItem('aViajes', JSON.stringify(viajess));
  //  } else {
  //   viajess = JSON.parse(localStorage.getItem('aViajes'));
  //   viajess.unshift(viaje);
  //   localStorage.setItem('aViajes', JSON.stringify(viajess));
  //  }
 // }
  
  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
