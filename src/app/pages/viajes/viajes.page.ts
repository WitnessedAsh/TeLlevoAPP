import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  constructor(public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  async buscar(){
    let cAlerta = await this.alerta.create({
      header: 'Buscando',
      message: 'Se mostraran los viajes disponibles',
      buttons: ['Siguiente']
    });
    await cAlerta.present()
  }

  volver(){
    this.router.navigate(["home"])
  }

}
