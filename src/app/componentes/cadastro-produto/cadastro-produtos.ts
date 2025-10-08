import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro-produtos.html',
  styleUrl: './cadastro-produtos.css'
})
export class CadastroProdutos {
  produto: any = {
    produto: '',
    descricao: '',
    preco: null
  }
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.obterProdutoPorId(Number(id)).subscribe(dados => {
        this.produto = dados
      })
    }
  }

  salvarProduto(): void {
    if (this.produto.id) {
      // salvar
      this.produtoService.atualizarProduto(this.produto.id, this.produto).subscribe(()=>{
        alert("Produto atualizado com sucesso!")
        this.router.navigate(['/painel-principal'])
      })
    }
    else {
      // cadastrar
      this.produtoService.adicionarProduto(this.produto).subscribe(()=>{
        alert("Produto cadastrado com sucesso!")
        this.router.navigate(['/painel-principal'])
      })
    }
  }
} 
