import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nuser:string;
  constructor(public toastController: ToastController, private router:Router) { }

  ngOnInit() {}

  ircontra(){
    this.router.navigate(["/rcontra"])
  }

  siguiente(){
    let NavigationExtras: NavigationExtras={
      state:{nuser: this.nuser}
    };
    this.router.navigate(["/home"],NavigationExtras)
  }

}
