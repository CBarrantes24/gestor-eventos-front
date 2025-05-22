import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventos-front';

  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    // No mostrar navbar en rutas de autenticación
    return !this.router.url.includes('/auth');
  }
}
