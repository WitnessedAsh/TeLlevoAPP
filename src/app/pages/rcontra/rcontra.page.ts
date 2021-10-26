import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';
@Component({
  selector: 'app-rcontra',
  templateUrl: './rcontra.page.html',
  styleUrls: ['./rcontra.page.scss'],
})
export class RcontraPage implements OnInit {
  user: String;
  constructor(public alerta:AlertController, public toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  siguiente(){
    this.router.navigate(["login"])
  }

  validar(){
    let vali: boolean=true;
    if(typeof this.user === 'undefined'){
      this.enviaralerta();
      vali=false
    }else{
      if(this.user.length === 0){
        vali = false;
        this.enviaralerta();
      }
    }
    if(vali){
      this.enviaralert();
    }
  }

  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Se ha enviado un mensaje al correo electronico de la cuenta',
      buttons: ['Entendido']
    });
    this.siguiente();
    await cAlerta.present();
  }

  async enviaralerta(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Ingrese un usuario.',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

}
