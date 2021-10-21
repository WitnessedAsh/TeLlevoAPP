import { Injectable } from '@angular/core';
import { Viaje } from '../interfaces/viaje';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  aviajes: Viaje[];

  constructor() { 
    this.aviajes = [];
  }

  getVi(): Viaje[] {
    if(localStorage.getItem('aviajes')===null){
      this.aviajes = [];
    }else{
      this.aviajes = JSON.parse(localStorage.getItem('aviajes'));
    }
    return this.aviajes
  }

  addVi(vi: Viaje): void {
    this.aviajes.unshift(vi);
    let viajes;
    if (localStorage.getItem('aviajes') === null){
      viajes = [];
      viajes.unshift(vi);
      localStorage.setItem('aviajes',JSON.stringify(viajes));
    }else{
      viajes = JSON.parse(localStorage.getIte('aviajes'));
      viajes.unshift(vi);
      localStorage.setItem('aviajes',JSON.stringify(viajes));
    }
  }

  deleteVi(vi: Viaje){
    for(let i = 0; this.aviajes.length; i++){
      if(vi == this.aviajes[i]){
        this.aviajes.splice(i,1);
        localStorage.setItem('aviajes',JSON.stringify(this.aviajes));
      }
    }
  }

}
