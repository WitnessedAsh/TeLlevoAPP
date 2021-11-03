import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newcontra',
  templateUrl: './newcontra.page.html',
  styleUrls: ['./newcontra.page.scss'],
})
export class NewcontraPage implements OnInit {
  nuser: String;
  ncontra: String;
  user: any;
  id:any;

  usuario: Usuario={
    id: null,
    usName: "",
    usUsername: "",
    usContra: "",
    usEmail: ""
  }

  constructor(private api: APIService,private activeroute: ActivatedRoute,private router: Router,
    public alerta:AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.nuser = this.router.getCurrentNavigation().extras.state.nuser;
      }
    });
  }

  ngOnInit() {
    console.log("newcontra-page:Nuser: "+this.nuser)
    this.enviaralert();
  }

  comprobarUser(){
    this.api.getUsuarios().subscribe((data)=>{
      this.user = data;
      var index = data.findIndex(x => x.usUsername === this.nuser);
      //console.log("el index:",index);
      if(this.nuser==data[index].usUsername){
        this.id = data[index].id;
        this.usuario.usName = data[index].usName;
        this.usuario.usUsername = data[index].usUsername
        this.usuario.usContra = this.ncontra;
        this.usuario.usEmail = data[index].usEmail;
        this.api.updateContra(this.id,this.usuario).subscribe(()=>
        this.contraNueva());
        this.router.navigate(["/login"]);
      }else{
        //this.Incorrecto();
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
  
  
  //Alertas
  async enviaralert(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Se ha enviado un mensaje al correo electronico de la cuenta',
      buttons: ['Entendido']
    });
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

  async contraNueva(){
    let cAlerta = await this.alerta.create({
      header: 'Enviado',
      message: 'Se ha actualizado la contraseña',
      buttons: ['Entendido']
    });
    await cAlerta.present();
  }

}
