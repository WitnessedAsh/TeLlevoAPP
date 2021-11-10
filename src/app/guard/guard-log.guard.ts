import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BDLocalService } from '../services/bdlocal.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLogGuard implements CanActivate {
  constructor(private navCtrl: NavController,private routes: Router, public bdlocalservice: BDLocalService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.bdlocalservice.getUs() === null) {
        this.navCtrl.navigateRoot(['login']);
        return false;
      }
      else {
        console.log(this.bdlocalservice.getUs());
        return true;
      }
  }
  
}
