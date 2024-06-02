import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems = [
    { label: 'Home', icon: 'bi-house', route: '/' },
    { label: 'Sobre', icon: 'bi-shop', route: '/sobre' },
    { label: 'Noivas', icon: 'bi-balloon-heart-fill', route: '/noivas' },
    { label: 'Debutantes', icon: 'bi-balloon-heart-fill', route: '/debutantes' },
    { label: 'Eventos Especiais', icon: 'bi-balloon-heart-fill', route: '/eventos-especiais' },
    { label: 'Dia a dia', icon: 'bi-balloon-heart-fill', route: '/dia-a-dia' },
    { label: 'Contato', icon: 'bi-headset', route: '/contato' }
  ];

  closeOffcanvas() {
    // fechar o offcanvas
    const offcanvas = document.querySelector('.offcanvas');
    if (offcanvas) {
      offcanvas.classList.remove('show');
    }

    // remover o backdrop
    const offcanvasbackdrop = document.querySelector('.offcanvas-backdrop');
    if (offcanvasbackdrop) {
      offcanvasbackdrop.classList.remove('show');
    }
  }

}
