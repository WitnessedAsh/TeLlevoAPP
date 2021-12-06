import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Conectado } from '../interfaces/conectado';
import { Viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root'
})
export class BDLocalService {

  singlePa: any;
  aviaje: Viaje[]=[];
  aconectado: Conectado[]=[];
  private _storage: Storage | null = null;
  aviajes: Viaje[];
  //lconec: Conectado[];
  
  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init();
    this.getViajes();
  }
 
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
 }

  async getViajes() {
    const lviaje=await this.storage.get('aviaje');
    if(lviaje){
      this.aviaje=lviaje;
    }
  }
  
  //id: number, viID:id,
  guardarViaje(direc: String, fe: Date, acom: number,sec: String,pre: number){
    this.aviaje.unshift({viDireccion:direc,viFecha:fe,viAcompa:acom,viSector:sec,viPrecio:pre});
    this._storage.set('aviaje',this.aviaje);
    this.presentToast("Viaje agregado.");
  }
  
 clearUs(){
   this.storage.remove("aconectado");
   console.log("clearUs!!")
 }

  guardarUs(user:String,tipo:String){
    this.aconectado.unshift({usUsername:user,usTipo:tipo});
    this._storage.set('aconectado',this.aconectado);
    console.log('aconectado:',this.aconectado);
  }

  getTipo(tipo:string){
    const ex = this.aconectado.find(x=>x.usTipo===tipo);
    if(!ex){
      console.log("TRUE1: " + tipo);
      console.log("TRUE2: " + this.aconectado.find(x=>x.usTipo));
      return true
    }else{
      console.log("TRUE1: " + tipo);
      console.log("TRUE2: " + this.aconectado.find(x=>x.usTipo));
      return false;
    }
  }

  async getUs(){
    const lus=await this.storage.get('aconectado');
    if(lus){
      this.aconectado=lus;
    }
  }
  
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
