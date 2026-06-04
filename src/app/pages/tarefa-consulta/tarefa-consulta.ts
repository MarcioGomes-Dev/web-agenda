import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-tarefa-consulta',
  imports: [
    CommonModule,
    Navbar,
    Sidebar
  ],
  templateUrl: './tarefa-consulta.html',
  styleUrl: './tarefa-consulta.css',
})
export class TarefaConsulta {}
