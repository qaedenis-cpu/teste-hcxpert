## Teste Técnico HCXpert

Projeto de automação de testes utilizando:

- Cypress
- Cucumber (BDD)
- JavaScript
- Page Object Model (POM)
- Esbuild

---

## Objetivo

Este projeto tem como objetivo automatizar fluxos de testes **Web e API**, aplicando boas práticas de automação como:

- BDD com Gherkin
- Page Object Model
- Reutilização de steps
- Separação de responsabilidades
- Testes end-to-end

---

## Cenários automatizados

### Web

#### Login
- Login com sucesso
- Login com credenciais inválidas

#### Busca de produtos
- Busca de produto existente
- Busca de produto inexistente

#### Carrinho de compras
- Adicionar produto ao carrinho
- Visualizar carrinho vazio
- Realizar checkout com produto no carrinho
- Tentar realizar checkout sem produtos

---

### API

#### Trello API
- Realizar requisição GET em endpoint de actions
- Validar status code da resposta
- Validar retorno do campo `data.list.name`

---

## Arquitetura do projeto

```text
cypress/
├── e2e/
│   ├── features/
│   │   ├── login.feature
│   │   ├── search.feature
│   │   ├── add_to_cart.feature
│   │   └── api_trello.feature
│   │
│   └── step_definitions/
│       ├── loginSteps.js
│       ├── searchSteps.js
│       ├── cartSteps.js
│       ├── apiSteps.js
│       └── commonSteps.js
│
├── support/
│   └── page_objects/
│       ├── homePage.js
│       ├── loginPage.js
│       ├── productsPage.js
│       └── cartPage.js
│
├── fixtures/
├── screenshots/
├── cypress.config.js
└── package.json


##  Instalação

Clone o repositório:

```bash

git clone https://github.com/qaedenis-cpu/teste-hcxpert.git

Acesse a pasta do projeto:

cd teste-hcxpert

Instale as dependências:

npm install

Execução dos testes

Abrir Cypress em modo interativo

npm run cy:open

Executar testes em modo headless

npm run cy:run

Executar um spec específico

npx cypress run --spec "cypress/e2e/features/add_to_cart.feature"
