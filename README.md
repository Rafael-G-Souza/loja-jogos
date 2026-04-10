Markdown
# 🎮 LojaJogos

## 📖 Sobre o Projeto
O **LojaJogos** é uma aplicação web desenvolvida em Angular para o gerenciamento de um catálogo de jogos. O sistema permite a visualização e manutenção de produtos através de uma interface interativa com comunicação a uma API REST.

## ✨ Funcionalidades
* **Painel Principal:** Exibição da lista de jogos cadastrados no sistema.
* **Cadastro de Produtos:** Interface dedicada para a adição de novos jogos ao catálogo.
* **Edição de Produtos:** Capacidade de atualizar as informações de jogos existentes utilizando o ID do produto.
* **Operações de Backend:** Integração com um serviço que realiza as operações de obter, adicionar, atualizar e deletar produtos.

## 🛠️ Tecnologias Utilizadas
* **Frontend:** [Angular v20.3.0](https://angular.dev/)
* **Estilização:** [Bootstrap v5.3.8](https://getbootstrap.com/)
* **Programação Reativa:** [RxJS](https://rxjs.dev/)
* **Armazenamento:** Estrutura inicial de dados consumida através do arquivo `db.json` (simulando um banco de dados com uma lista de produtos).

## 🚀 Como Executar o Projeto

### 1. Instalação das Dependências
Certifique-se de ter o Node.js e o Angular CLI instalados. Clone o repositório e execute o comando abaixo na pasta raiz:
```bash
npm install

  ```
2. Executando a API Simulada
O serviço de produtos da aplicação realiza as requisições HTTP apontando para http://localhost:3000/produtos. Para iniciar o servidor de dados que responderá nessas rotas, utilize o json-server:

```bash
npx json-server --watch db.json --port 3000
```
3. Executando o Frontend Angular
Para iniciar o servidor de desenvolvimento local, execute o comando:

```bash
ng serve
```
Após a compilação, abra o seu navegador e acesse http://localhost:4200/. A aplicação será recarregada automaticamente caso você modifique e salve qualquer arquivo de origem.

📂 Estrutura de Rotas Principais
/painel-principal: Rota padrão que exibe a tela inicial com os produtos.

/cadastro-produto: Rota que carrega o componente para registrar um novo jogo.

/editar-produto/:id: Rota que carrega o formulário de cadastro preenchido para edição de um jogo específico.

👨‍💻 Autor
Rafael Gonçalves de Souza
Desenvolvedor Full Stack Júnior

Este projeto foi gerado utilizando o Angular CLI versão 20.3.3.
