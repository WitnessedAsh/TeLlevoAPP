import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BDLocalService } from 'src/app/services/bdlocal.service';
import { Viaje } from 'src/app/interfaces/viaje';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.component.html',
  styleUrls: ['./crearviaje.component.scss'],
})
export class CrearviajeComponent implements OnInit {
  constructor(public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router, 
    public bdlocalservice: BDLocalService) { }

  ngOnInit() {}

  //guardar(){
  //  this.bdlocalservice.addViaje(Viaje);
  //}

  crear(){
    this.router.navigate(["crearviaje"])
  }

  viajes(){
    this.router.navigate(["viajes"])
  }

  modificar(){
    this.router.navigate(["modificar"])
  }

}
