import { Component, OnInit } from '@angular/core';
import { NavigationExtras ,Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';
import { APIService } from 'src/app/services/api.service';
@Component({
  selector: 'app-rcontra',
  templateUrl: './rcontra.page.html',
  styleUrls: ['./rcontra.page.scss'],
})
export class RcontraPage implements OnInit {
  nuser: String;
  user: any;
  email: any;
  constructor(public alerta:AlertController, public toastController: ToastController, private router:Router,
    private api: APIService, private EmailComposer: EmailComposer) { }

  ngOnInit() {
  }

  siguiente(){
    let NavigationExtras: NavigationExtras={
      state:{nuser: this.nuser}
    };
    this.router.navigate(["newcontra"],NavigationExtras)
  }

  comprobarUser(){
    this.api.getUsuarios().subscribe((data)=>{
      this.user = data;
      var index = data.findIndex(x => x.usUsername === this.nuser);
      //console.log("el index:",index);
      if(this.nuser==data[index].usUsername){
        this.email = data[index].usEmail;
        this.EmailComposer.isAvailable().then((available: boolean) =>{
          if(available) {
            this.sendMail();
          }
         });
        this.siguiente();
      }else{
        this.Incorrecto();
      }
    });
 }

  validar(){
    let vali: boolean=true;
    if(typeof this.nuser === 'undefined'){
      this.enviaralerta();
      vali=false
    }else{
      if(this.nuser.length === 0){
        vali = false;
        this.enviaralerta();
      }
    }
    if(vali){
      this.comprobarUser();
    }
  }

  sendMail(){
    let emails = {
      to: this.email,
      cc: 'vgamboacacciuttolo@gmail.com',
      attachments: [],
      subject: 'TeLlevoApp',
      body: 'Correo para validar cambio de contraseña',
      isHtml: true
    };
    this.EmailComposer.open(emails);
  }


  //ALERTAS
  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Se ha enviado un mensaje al correo electronico de la cuenta',
      buttons: ['Entendido']
    });
    this.siguiente();
    await cAlerta.present();
  }

  async enviaralerta(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Correo invalido.',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

  async Incorrecto(){
    let cAlerta = await this.alerta.create({
      header: 'Error',
      message: 'Correo no valido',
      buttons: ['Entendido']
    });
    await cAlerta.present()
  }

}
