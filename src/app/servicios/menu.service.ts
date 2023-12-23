import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  traerPlatos():Observable<any>{
    return this.http.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=662d5507feb44338b4239303490affba')
  }
}

