import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Viaje } from '../interfaces/viaje';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }
  
  // Se establece la base url del API a consumir
  apiURL = 'http://172.20.10.2:3000';

  // Se declara la variable http de tipo HttpClient
  constructor(private http:HttpClient) { }  

  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }
  
  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }

  getUser(filtro: String):Observable<any>{
    return this.http.get(this.apiURL+'/users/?username='+filtro).pipe(
    retry(3)
    );
  }

  //createViaje(viaje: Viaje):Observable<any>{
  //  console.log(this.apiURL);
  //  return this.http.post(this.apiURL+'/viajes',viaje,this.httpOptions).pipe(
  //  retry(3)
  //  );
  //}

  crearViaje(viaje: Viaje) {
    console.log(this.apiURL);
    const path = `${this.apiURL}/viajes`;
    return this.http.post(path, viaje);
  }

  getViajes():Observable<any>{
    return this.http.get(this.apiURL+'/viajes/').pipe(
      retry(3)
    );
  }

  getSector(id: String) {
    const path = `${this.apiURL}/viajes/${id}`;
    return this.http.get<Viaje>(path);
  }

  getViaje(filtro):Observable<any>{
    return this.http.get(this.apiURL+'/viajes/?viSector='+filtro).pipe(
    retry(3)
    );
  }

  deleteViaje(id):Observable<any>{
    return this.http.delete(this.apiURL+'/viajes/?id='+id,this.httpOptions);
  }
     
  borrarViaje(id: number) {
    const path = `${this.apiURL}/viajes/${id}`;
    return this.http.delete(path);
  }   
   


}
