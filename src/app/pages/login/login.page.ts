import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nuser:any;
  ncontra:string;
  user:any;
  users:any;
  usl:any[]=[];
  constructor(public toastController: ToastController, private router:Router, public alerta:AlertController,
    private api: APIService) { }

  async ngOnInit() {}

  ircontra(){
    this.router.navigate(["/rcontra"])
  }

  siguiente(){
    let NavigationExtras: NavigationExtras={
      state:{nuser: this.nuser}
    };
    this.router.navigate(["/home/viajes"],NavigationExtras)
  }

  comprobarUser(){
    this.api.getUsuarios().subscribe((data)=>{
      this.user = data;
      var index = data.findIndex(x => x.usUsername === this.nuser);
      //console.log("el index:",index);
      if(this.nuser==data[index].usUsername && this.ncontra==data[index].usContra){
        this.siguiente();
      }else{
        this.Incorrecto();
        this.presentToast("Datos invalidos");
      }
    });
 }


  validar(){
    let vali: boolean=true;
    if(typeof this.nuser == 'undefined' || typeof this.ncontra == 'undefined'){
      this.enviaralert();
      vali=false
    }else{
      if(this.nuser.length === 0){
        vali = false;
        this.enviaralert();
      }
      if(this.ncontra.length === 0){
        vali = false;
        this.enviaralert();
      }
    }
    if(vali){
      this.comprobarUser();
    }
  }

  //async loginAlert(msg: String){                            this.siguiente();
  //  const alert = await this.alertController.create({
  //    cssClass: 'ion-text-center',
  //    header: msg,
  //    animated: true,
  //   translucent: true,
  //    buttons: [{
  //      text: 'Intentar denuevo',
  //      role: 'cancel',
  //      cssClass: 'large primary ion-padding-horizontal',
  //      handler: (blah) => {
  //        console.log('Confirm Cancel: blah');
  //      },
  //    }]
  //  });
  //  alert.present();
  //}

  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Usuario o Contraseña vacios',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async Incorrecto(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Usuario o Contraseña no valido',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async presentToast(msg:string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500
    })
    toast.present();
  }

}
