import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BDLocalService } from 'src/app/services/bdlocal.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Viaje } from 'src/app/interfaces/viaje';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.component.html',
  styleUrls: ['./crearviaje.component.scss'],
})
export class CrearviajeComponent implements OnInit {
  id:any;
  direc:any;
  fe:any;
  acom:any;

  constructor(public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router, 
    public bdlocalservice: BDLocalService) { }

  ngOnInit() {}

  //guardar(){
  //  this.bdlocalservice.addViaje(Viaje);
  //}

  addVia(){
    //this.bdlocalservice.guardarViaje(this.id,this.direc,this.fe,this.acom);
    console.log(this.id,this.direc,this.fe,this.acom);
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
