import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-edicao',
  imports: [
    CommonModule,
    Navbar,
    Sidebar,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './categoria-edicao.html',
  styleUrl: './categoria-edicao.css',
})
export class CategoriaEdicao {

  private http = inject(HttpClient);
  private activated = inject(ActivatedRoute);
  private id = 0;

  //Função executada ao carregar a página
  ngOnInit() {
    //Capturando o ID da categoria a ser editada a partir da URL
    this.id = this.activated.snapshot.params['id'];
    //Enviando uma requisição GET para o backend para buscar os dados da categoria
    this.http.get(`http://localhost:8083/api/v1/categorias/obter/${this.id}`)
      .subscribe((response: any) => {
        this.id = response.id;
        this.formEdicao.patchValue({nome : response.nome});
      });
  }

  //Estrutura do formulário
  formEdicao = new FormGroup({
    nome: new FormControl('', [Validators.required]),
  });

  //Função para capturar o SUBMIT do formulário
  atualizarCategoria() {
    //Enviando uma requisição POST para o backend com os dados do formulário
    this.http.put('http://localhost:8083/api/v1/categorias/atualizar/' + this.id, this.formEdicao.value)
      .subscribe({
        next: (response: any) => { //Capturando a resposta de sucesso do backend
          alert(`Categoria ${response.nome} atualizada com sucesso!`);
        },
        error: (e) => { //Capturando a resposta de erro do backend
          console.error('Erro ao atualizar categoria', e.error);
        }
      });
  }
}
