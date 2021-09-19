import { Injectable } from '@angular/core';
import comediantes  from '../files/countries.json';
import { Comediantes } from '../models/youtube.models';


@Injectable({
  providedIn: 'root'
})
export class ComediantesService {

 comediantesAux: Comediantes[] = [];
 comediantesPaises: Comediantes[] = [];
 comico: Comediantes = {} ;

  constructor() { 
    this.comediantesAux = comediantes;   
  }

  public getComediantes() {    
    return this.comediantesAux;
   
  }

  public getComediante( name: string ) {  

   for ( let i=0; i< this.comediantesAux.length; i++){
     if( this.comediantesAux[i].name === name){
     this.comico = this.comediantesAux[i];
     }
   }   
   return this.comico;
  }

  public getComediantesPaises( pais : string ){
    this.comediantesPaises = [];
    for(let i = 0; i < this.comediantesAux.length; i++){
     if(this.comediantesAux[i].country?.toLowerCase() === pais.toLowerCase()) {
         this.comediantesPaises.push( this.comediantesAux[i] );
      }
    }
    console.log( this.comediantesPaises );
    return this.comediantesPaises;
  }
}
