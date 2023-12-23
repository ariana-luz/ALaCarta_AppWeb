import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Plato1Component } from "../plato1/plato1.component";
import { Plato2Component } from "../plato2/plato2.component";
import { Plato3Component } from "../plato3/plato3.component";
import { Plato4Component } from "../plato4/plato4.component";
import { MenuService } from '../../servicios/menu.service';

@Component({
    selector: 'app-platos',
    standalone: true,
    templateUrl: './platos.component.html',
    styleUrl: './platos.component.scss',
    imports: [Plato1Component, Plato2Component, Plato3Component, Plato4Component]
})
export class PlatosComponent {

  miMenu: any;
  constructor (private platosMenu:MenuService) {}

  ngOnInit():void{
  this.platosMenu.traerPlatos().subscribe(data =>{
    console.log(data);
    this.miMenu=data;
  });
  }
  
  @Input() username=''; //data de padre a hijo
  @Output() addFavoriteEvent = new EventEmitter();
plato: any;
item: any;

  // fav(dishName:string){
  //   //  alert(`${this.username} ha elegido ${dishName}`);
  //   this.addFavoriteEvent.emit(dishName); //this se refiere a la instancia de la clase
  // }
  
  fav2(itemTitle:string){
  this.addFavoriteEvent.emit(itemTitle);
  }

  // dishes=[
  //   {
  //   id:1,
  //   name: 'pasta',
  //   },
  //   {
  //     id:2,
  //     name: 'salad'
  //   }
  // ]



}

