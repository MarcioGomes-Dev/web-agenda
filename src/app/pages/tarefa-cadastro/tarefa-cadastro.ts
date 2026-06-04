import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-tarefa-cadastro',
  imports: [
    CommonModule,
    Navbar,
    Sidebar
  ],
  templateUrl: './tarefa-cadastro.html',
  styleUrl: './tarefa-cadastro.css',
})
export class TarefaCadastro {}
