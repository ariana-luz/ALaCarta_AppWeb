import { Component, Input } from '@angular/core';
import { PlatosComponent } from "../platos/platos.component";
import { Router } from '@angular/router';
import { Plato1Component } from "../plato1/plato1.component";
import { Plato4Component } from "../plato4/plato4.component";
import { Plato3Component } from "../plato3/plato3.component";
import { Plato2Component } from "../plato2/plato2.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [PlatosComponent, Plato1Component, Plato4Component, Plato3Component, Plato2Component]
})
export class HomeComponent {
    username = 'ariana';
    isLoggedIn = true;
    favDish = '';

    constructor(private router: Router) {

    }
    getFavorite(dishName: string) {
        this.favDish = dishName;
    } //un evento que cuando recupere el favorito, lo lleve al Home. El plato elegido es el que haya llegado a favDish
    verPerfil() {
        this.router.navigateByUrl('/perfil');
    }
    BuscarPlatos(){
        this.router.navigateByUrl('/buscador');
    }
}
