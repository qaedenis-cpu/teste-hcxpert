# Teste Técnico HCXpert

Projeto desenvolvido utilizando:

* Cypress
* Cucumber (BDD)
* JavaScript
* Esbuild

---

## Funcionalidades automatizadas

### Web

#### Login

* Login com sucesso
* Login inválido

#### Busca

* Busca de produto existente
* Busca de produto inexistente

#### Carrinho

* Adicionar produto ao carrinho
* Tentar visualizar carrinho vazio
* Realizar checkout com produto no carrinho
* Tentar realizar checkout sem produtos

### API

* GET na API do Trello
* Validação do status code
* Exibição do campo `response.body.data.list.name`

---

## Estrutura do projeto

```text
cypress

└── e2e
    └── features

        ├── api

        ├── busca

        ├── carrinho

        └── login

fixtures

cypress.config.js

package.json
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/qaedenis-cpu/teste-hcxpert.git
```

Instale as dependências:

```bash
npm install
```

---

## Execução

Abrir o Cypress:

```bash
npm run cy:open
```

Executar em modo headless:

```bash
npm run cy:run
```
