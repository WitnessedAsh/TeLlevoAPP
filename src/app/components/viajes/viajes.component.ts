import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomePage } from 'src/app/pages/home/home.page';
import { BDLocalService } from 'src/app/services/bdlocal.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {
  nuser:any;
  constructor(public alerta:AlertController,private activeroute: ActivatedRoute, private router: Router,
    private home: HomePage, private bdlocalservice: BDLocalService) {
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state){
          this.nuser = this.router.getCurrentNavigation().extras.state.nuser;
          console.log("nuser: ", this.nuser);
        }
      });
    }

  ngOnInit() {
    this.bdlocalservice.getUs();
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
