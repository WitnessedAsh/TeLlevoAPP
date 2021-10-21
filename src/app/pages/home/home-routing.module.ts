import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearviajeComponent } from 'src/app/components/crearviaje/crearviaje.component';
import { MisdatosComponent } from 'src/app/components/misdatos/misdatos.component';
import { ViajesComponent } from 'src/app/components/viajes/viajes.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[{
      path:"crearviaje",
      component: CrearviajeComponent
    },{
      path:"viajes",
      component: ViajesComponent
    },{
      path: "misdatos",
      component: MisdatosComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
