import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BDLocalService } from 'src/app/services/bdlocal.service';
import { Viaje } from 'src/app/interfaces/viaje';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.component.html',
  styleUrls: ['./crearviaje.component.scss'],
})
export class CrearviajeComponent implements OnInit {

    nuser: any;
    tipouser: "conductor";
    usLocal: any={
      usUsername: "",
      usTipo: ""
    }

  constructor(private api: APIService, public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router, 
    public bdlocalservice: BDLocalService) {
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state){
          this.nuser = this.router.getCurrentNavigation().extras.state.nuser;
        }
      });
     }

  ngOnInit() {
    this.bdlocalservice.getUs().then((data) => {
      this.usLocal = data;
    });
    console.dir(this.usLocal);
  }

  crear(){
    if(this.bdlocalservice.getTipo('conductor')){
      console.log("FALSO")
      this.enviaralert();
    }else{
      this.router.navigate(["crearviaje"])
    }
    
  }

  viajes(){
    this.router.navigate(["viajes"])
  }

  modificar(){
    if(this.bdlocalservice.getTipo('conductor')){
      console.log("FALSO")
      this.enviaralert2();
    }else{
      this.router.navigate(["modificar"])
    }
  }

  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Su cuenta no tiene el rol de conductor por lo que no puede crear viajes.',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async enviaralert2(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Su cuenta no tiene el rol de conductor por lo que no puede modificar viajes.',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

}
