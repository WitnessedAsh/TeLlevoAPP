import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Viaje } from 'src/app/interfaces/viaje';
import { APIService } from 'src/app/services/api.service';
import { BDLocalService } from 'src/app/services/bdlocal.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  viaje:any;
  viajes:any;
  viDireccion:any;
  vil: any[]=[];

  constructor(private loadingCtrl: LoadingController,private api: APIService,public alerta:AlertController,
    private activeroute: ActivatedRoute, private router: Router,private toastCtrl: ToastController,public bdlocalservice: BDLocalService) { }

    async ngOnInit() {
      const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
      await loading.present();
      this.api.getViajes().subscribe(async (viajes) => {
      console.log(viajes);
      this.vil = viajes;
      await loading.dismiss();
    });
  }

  ionViewWillEnter(){
    this.getViajes();
  }

  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }



}
