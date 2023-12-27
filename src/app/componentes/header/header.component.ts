import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  verPerfil() {
    this.router.navigateByUrl('/perfil');
  }
  BuscarPlatos() {
    this.router.navigateByUrl('/buscador');
  }
}
