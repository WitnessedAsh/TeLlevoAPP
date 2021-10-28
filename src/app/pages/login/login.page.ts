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
  a:any;
  nuser:any;
  ncontra:string;
  user:any;
  users:any;
  usl:any[]=[];
  username:any;
  constructor(public toastController: ToastController, private router:Router, public alerta:AlertController,
    private api: APIService) { }

  ngOnInit() {
    this.api.getUsuarios().subscribe(async (username) => {
      this.usl = username;
      console.log(username);
  })
 }

  ircontra(){
    this.router.navigate(["/rcontra"])
  }

  siguiente(){
    let NavigationExtras: NavigationExtras={
      state:{nuser: this.nuser}
    };
    this.router.navigate(["/home"],NavigationExtras)
  }

  comprobarUser(){
    let index = this.nuser.filter(x => x.username === this.nuser);
    if(index === this.nuser){
      console.log(index);
      return true;
    }else{
      return false;
    }
  }

  validar(){
    let vali: boolean=true;
    if(typeof this.nuser === 'undefined' || typeof this.ncontra === 'undefined'){
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
      this.siguiente();
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

}
