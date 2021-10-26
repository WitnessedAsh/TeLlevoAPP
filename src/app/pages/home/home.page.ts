import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { createAnimation ,Animation, AnimationController } from '@ionic/angular';
import { ViajesComponent } from 'src/app/components/viajes/viajes.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  nuser:String;
  constructor(private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    
  }

  segmentChanged(event: any){
    console.log(event);
    let ruta=event.detail.value
    this.router.navigate(['home/'+ruta])
  }

  salir(){
    this.router.navigate(["/login"])
  }

  irviajes(){
    this.router.navigate(["/viajes"])
  }



}
