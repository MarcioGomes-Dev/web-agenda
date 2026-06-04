import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-tarefa-edicao',
  imports: [
    CommonModule,
    Navbar,
    Sidebar
  ],
  templateUrl: './tarefa-edicao.html',
  styleUrl: './tarefa-edicao.css',
})
export class TarefaEdicao {}
