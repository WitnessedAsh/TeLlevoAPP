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

  constructor(public alerta:AlertController, public toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  siguiente(){
    this.router.navigate(["login"])
  }

  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Se ha enviado un mensaje al correo electronico de la cuenta',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

}
