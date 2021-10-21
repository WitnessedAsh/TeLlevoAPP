import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createAnimation ,Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  nuser:any;
  constructor(private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    this.router.navigate(['home/crearviaje'])
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
