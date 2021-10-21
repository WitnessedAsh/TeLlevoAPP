import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  constructor(public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  async Crear(){
    let cAlerta = await this.alerta.create({
      header: 'Creando',
      message: 'Viaje creado',
      buttons: ['Siguiente']
    });
    await cAlerta.present()
  }

  volver(){
    this.router.navigate(["home"])
  }

}
