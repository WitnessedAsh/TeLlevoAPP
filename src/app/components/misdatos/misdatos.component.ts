import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
})
export class MisdatosComponent implements OnInit {

  constructor(private router:Router) { }

  envia(){
//utilizo API enrutador para llamar nueva pagina       <--- se crea la funcion
this.router.navigate(['datos-per']);  

  }
  ngOnInit() {}

}
