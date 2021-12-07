import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { APIService } from 'src/app/services/api.service';
import { BDLocalService } from 'src/app/services/bdlocal.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nuser:any;
  usest:any;
  ncontra:string;
  user:any;
  users:any;
  usl:any[]=[];

  constructor(public toastController: ToastController, private router:Router, public alerta:AlertController,
    private api: APIService, public bdlocalservice: BDLocalService, private navCtrl: NavController) { }

  async ngOnInit() {
    this.bdlocalservice.clearUs('aconectado');
  }

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
    this.bdlocalservice.clearUs('aconectado');
    this.api.getUsuarios().subscribe((data)=>{
      var index = data.findIndex(x => x.usUsername === this.nuser);
      this.usest = data[index].usTipo;
      if(this.nuser==data[index].usUsername && this.ncontra==data[index].usContra){
        console.log("Sesión Iniciada!");
        localStorage.setItem('logeado', 'true');
        this.bdlocalservice.guardarUs(this.nuser,this.usest);
        this.siguiente();
      }else{
        this.Incorrecto();
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
