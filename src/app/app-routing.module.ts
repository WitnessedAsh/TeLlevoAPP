import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardLogGuard } from './guard/guard-log.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'rcontra',
    loadChildren: () => import('./pages/rcontra/rcontra.module').then( m => m.RcontraPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./pages/crearviaje/crearviaje.module').then( m => m.CrearviajePageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'datos-per',
    loadChildren: () => import('./pages/datos-per/datos-per.module').then( m => m.DatosPerPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'newcontra',
    loadChildren: () => import('./pages/newcontra/newcontra.module').then( m => m.NewcontraPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: 'googlemaps',
    loadChildren: () => import('./pages/googlemaps/googlemaps.module').then( m => m.GooglemapsPageModule),
    canActivate:[GuardLogGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
