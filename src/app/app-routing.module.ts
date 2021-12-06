import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DesloguearGuard } from './guards/desloguear.guard';
import { LogueadoGuard } from './guards/logueado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [DesloguearGuard]
  },
  {
    path: 'rcontra',
    loadChildren: () => import('./pages/rcontra/rcontra.module').then( m => m.RcontraPageModule),
    canActivate: [DesloguearGuard]
  },
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./pages/crearviaje/crearviaje.module').then( m => m.CrearviajePageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: 'datos-per',
    loadChildren: () => import('./pages/datos-per/datos-per.module').then( m => m.DatosPerPageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: 'newcontra',
    loadChildren: () => import('./pages/newcontra/newcontra.module').then( m => m.NewcontraPageModule),
    canActivate: [DesloguearGuard]
  },
  {
    path: 'mapbox',
    loadChildren: () => import('./pages/mapbox/mapbox.module').then( m => m.MapboxPageModule),
    canActivate: [LogueadoGuard]
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule),
    canActivate: [LogueadoGuard]
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
