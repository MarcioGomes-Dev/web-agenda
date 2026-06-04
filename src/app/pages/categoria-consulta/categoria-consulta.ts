import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria-consulta',
  imports: [
    CommonModule,
    Navbar,
    Sidebar,
    RouterLink
  ],
  templateUrl: './categoria-consulta.html',
  styleUrl: './categoria-consulta.css',
})
export class CategoriaConsulta {

   //Injeção de dependência do HttpClient
   private http = inject(HttpClient);

   //Array para armazenar as categorias
   categorias = signal<any[]>([]);

   //Função executada quando o componente é inicializado
   ngOnInit() {
      //Chamada para a API para obter as categorias
      this.http.get<any[]>('http://localhost:8083/api/v1/categorias/consultar')
        .subscribe((response) => {
            //Armazena as categorias obtidas da API no signal
            this.categorias.set(response);
        });
   }

   //Função para excluir uma categoria
   excluirCategoria(id : number) {
      //Confirmar se o usuário realmente deseja excluir a categoria
      if(confirm('Deseja realmente excluir esta categoria?')) {
          //Chamada para a API para excluir a categoria
          this.http.delete('http://localhost:8083/api/v1/categorias/excluir/' + id)
            .subscribe((response: any) => {
                alert(`Categoria ${response.nome} excluída com sucesso!`);
                this.ngOnInit(); //Recarrega a lista de categorias após a exclusão
            });
      }
   }
}
