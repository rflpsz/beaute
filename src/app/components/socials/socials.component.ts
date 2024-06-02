import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  socials: any[] = [
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/espacobeauteoficial' },
    { name: 'Tiktok', icon: 'tiktok', url: 'https://www.tiktok.com/@espacojulianarodrigues' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/espacojulianariopardo' }
  ];
}
