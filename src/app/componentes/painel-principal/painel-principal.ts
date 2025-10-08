import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../servicos/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-principal',
  standalone: true,
  templateUrl: './painel-principal.html',
  styleUrl: './painel-principal.css'
})
export class PainelPrincipal implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }
  excluirProduto(id: number) {
    if(confirm("Deseja realmente excluir este produto?")){
      this.produtoService.deletarProduto(id).subscribe(() =>{
        alert("Produto excluído com sucesso!");
        this.listarProdutos();
      });
    }
  };
      editarProduto(id: number){
        this.router.navigate(['editar-produto',id]);
      }
    
}
