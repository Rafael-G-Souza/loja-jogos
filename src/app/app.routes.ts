import { Routes } from '@angular/router';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';
import { CadastroProdutos } from './componentes/cadastro-produto/cadastro-produtos';

export const routes: Routes = [
    {
        path: 'painel-principal',
        component: PainelPrincipal
    },
    {
        path: '',
        redirectTo: 'painel-principal',
        pathMatch: 'full'
    },
    {
        path: 'cadastro-produto',
        component: CadastroProdutos
    },
    {
        path: 'editar-produto/:id',
        component: CadastroProdutos
    }
];
