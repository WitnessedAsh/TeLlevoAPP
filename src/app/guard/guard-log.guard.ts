import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BDLocalService } from '../services/bdlocal.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLogGuard implements CanActivate {
  constructor(private routes: Router, public bdlocalservice: BDLocalService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.bdlocalservice.getUs() != null) {
        console.log(this.bdlocalservice.getUs());
        return true;
      }
      else {
        this.routes.navigate(['/login']);
        return false;
      }
      console.log(this.bdlocalservice.getUs());
  }
  
}
