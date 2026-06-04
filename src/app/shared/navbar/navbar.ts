import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  nomeUsuario = signal<string>('');
  perfilUsuario = signal<string>('');

  ngOnInit(){

    const usuario = JSON.parse(sessionStorage.getItem('usuario') as string);

    this.nomeUsuario.set(usuario.nome);
    this.perfilUsuario.set(usuario.perfil);
  }

  logout(){

    if(confirm('Deseja realmente sair do sistema?')){

      sessionStorage.removeItem('usuario');

      location.href = '/autenticar';
    }
  }
}
