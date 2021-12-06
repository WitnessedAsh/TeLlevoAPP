import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, Routes } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Viaje } from 'src/app/interfaces/viaje';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})

export class ModificarPage implements OnInit {
  viaje:any;
  viajes:any;
  viDireccion:any;
  vil: any[]=[];

  constructor(private loadingCtrl: LoadingController,private api: APIService,public alerta:AlertController,
    private activeroute: ActivatedRoute, private router: Router,private toastCtrl: ToastController,) { }

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

  detalles(){
    let NavigationExtras: NavigationExtras={
      state:{vil: this.vil}
    };
    this.router.navigate(["detalles"],NavigationExtras)
  }

  Eliminar(id: number, index: number) {
    this.api.borrarViaje(id)
    .subscribe(() => {
      this.viajes.splice(index, 1);
      this.vil = this.viajes.filter(viajes => viajes.id != id);
      this.presentToast('El viaje fue eliminado');
    });
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
