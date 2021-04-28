import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'EeLafpZHESp6BOjNcDVxg7kEoP5H90mQ';

  private _historial: string[] = [];

  // TODO: Cambiar Any por su tipo correspondiente.
  public results: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ){}

  buscarGifs( query:string = '' ){
    
    query = query.trim().toLowerCase();

    if( !this._historial.includes(query) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=EeLafpZHESp6BOjNcDVxg7kEoP5H90mQ&q=${query}&limit=10`)
        .subscribe( (response:any) => {
          console.log(response.data);
          this.results = response.data;
        })

  }

}
