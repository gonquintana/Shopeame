import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient){}


  getItem(){
    return this.http.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
  }

  postItem(){

  }
}
