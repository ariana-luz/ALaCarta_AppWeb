import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-buscador',
    standalone: true,
    templateUrl: './buscador.component.html',
    styleUrl: './buscador.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class BuscadorComponent {

}
