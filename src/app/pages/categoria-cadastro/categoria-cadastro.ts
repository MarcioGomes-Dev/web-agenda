import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categoria-cadastro',
  imports: [
    CommonModule,
    Navbar,
    Sidebar,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './categoria-cadastro.html',
  styleUrl: './categoria-cadastro.css',
})
export class CategoriaCadastro {

  private http = inject(HttpClient);

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
  });

  cadastrarCategoria(){
    
    this.http.post('http://localhost:8083/api/v1/categorias/cadastrar', this.formCadastro.value)
      .subscribe({
        next: (response:any) => {
          alert(`Categoria ${response.nome} cadastrada com sucesso!`);
          this.formCadastro.reset();
        },
        error: (e) => {
          console.error('Erro ao cadastrar categoria', e.error);
        }
      });
  }
}
