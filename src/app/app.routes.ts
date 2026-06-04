import { Routes } from '@angular/router';
import { Autenticar } from './pages/autenticar/autenticar';
import { CriarConta } from './pages/criar-conta/criar-conta';
import { Dashboard } from './pages/dashboard/dashboard';
import { CategoriaCadastro } from './pages/categoria-cadastro/categoria-cadastro';
import { CategoriaConsulta } from './pages/categoria-consulta/categoria-consulta';
import { CategoriaEdicao } from './pages/categoria-edicao/categoria-edicao';
import { TarefaCadastro } from './pages/tarefa-cadastro/tarefa-cadastro';
import { TarefaConsulta } from './pages/tarefa-consulta/tarefa-consulta';
import { TarefaEdicao } from './pages/tarefa-edicao/tarefa-edicao';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
    {
        path: 'autenticar',
        component: Autenticar
    },
    {
        path:'criar-conta',
        component: CriarConta
    },
    {
        path:'dashboard',
        component: Dashboard, canActivate: [authGuard]
    },
    {
        path:'categoria-cadastro',
        component: CategoriaCadastro, canActivate: [authGuard]
    },
    {
        path:'categoria-consulta',
        component: CategoriaConsulta, canActivate: [authGuard]
    },
    {
        path:'categoria-edicao/:id',
        component: CategoriaEdicao, canActivate: [authGuard]
    },
    {
        path:'tarefa-cadastro',
        component: TarefaCadastro, canActivate: [authGuard]
    },
    {
        path:'tarefa-consulta',
        component: TarefaConsulta, canActivate: [authGuard]
    },
    {
        path:'tarefa-edicao/:id',
        component: TarefaEdicao, canActivate: [authGuard]
    },
    {
        path:'', pathMatch:'full', redirectTo: '/autenticar'
    }
];
