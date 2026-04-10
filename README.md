# 🎮 Loja de Jogos (Game Store)

## 📖 Sobre o Projeto
O **LojaJogos** é uma aplicação web desenvolvida para gerir um catálogo de jogos. O sistema permite visualizar, adicionar, editar e eliminar produtos, consumindo uma API REST simulada. 

## ✨ Funcionalidades
* **Painel Principal:** Visualização em grelha ou lista de todos os jogos disponíveis na loja.
* **Registo de Produtos:** Formulário dedicado para adicionar novos jogos ao catálogo.
* **Edição e Exclusão:** Gestão completa (CRUD) dos jogos existentes, permitindo a atualização de detalhes ou a remoção de itens.
* **Server-Side Rendering (SSR):** A aplicação está configurada para suportar renderização do lado do servidor para um melhor desempenho.

## 🛠️ Tecnologias Utilizadas
* **Frontend:** [Angular v20.3.0](https://angular.dev/)
* **Estilização:** [Bootstrap v5.3.8](https://getbootstrap.com/) para componentes visuais responsivos
* **Programação Reativa:** [RxJS](https://rxjs.dev/) para a gestão de fluxos de dados assíncronos
* **Backend Simulado:** Utilização de ficheiro `db.json` como base de dados

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de que tem o [Node.js](https://nodejs.org/) e o [Angular CLI](https://github.com/angular/angular-cli) (versão 20.3.3) instalados na sua máquina.

### 1. Clonar o Repositório e Instalar Dependências
Na pasta raiz do projeto, instale todas as dependências necessárias:
```bash
npm install
```
2. Executar a API Simulada (Backend)
O serviço de produtos da aplicação (ProdutoService) faz pedidos para http://localhost:3000/produtos. Para que os dados sejam carregados corretamente, é necessário expor o ficheiro db.json através do json-server:

```bash
# Caso não tenha o json-server instalado globalmente:
npm install -g json-server
```
# Iniciar o servidor de dados na porta 3000
```bash
json-server --watch db.json --port 3000
```
3. Executar a Aplicação Angular (Frontend)
Num novo terminal, inicie o servidor de desenvolvimento do Angular:

```bash
ng serve
```
Após a compilação terminar, abra o seu navegador e abra a http://localhost:4200/. A aplicação será recarregada automaticamente sempre que modificar algum ficheiro de código-fonte.

📂 Estrutura de Rotas
A aplicação possui as seguintes rotas principais para navegação:

/painel-principal: Ecrã inicial com a listagem dos produtos.

/cadastro-produto: Ecrã com o formulário de registo de um novo produto.

/editar-produto/:id: Ecrã para edição dos dados de um produto específico.

👨‍💻 Autor
Rafael Gonçalves de Souza
Desenvolvedor Full Stack Júnior

Este projeto foi gerado com o Angular CLI versão 20.3.3.
