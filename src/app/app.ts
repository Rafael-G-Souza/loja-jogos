import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './componentes/menu/menu';
import { Rodape } from './componentes/rodape/rodape';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Menu,
    Rodape,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-jogos');
}
