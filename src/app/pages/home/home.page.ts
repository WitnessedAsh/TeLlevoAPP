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
  nuser:any;
  constructor(private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.nuser = this.router.getCurrentNavigation().extras.state.nuser;
        console.log("nuser: ", this.nuser);
      }
    });
  }

  ionViewDidEnter(){
    console.log("component: " +this.nuser);
    let NavigationExtras: NavigationExtras={
      state: {nuser: this.nuser}
    }
    this.router.navigate(["home/viajes"],NavigationExtras);
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
