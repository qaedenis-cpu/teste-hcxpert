# Teste Técnico HCXpert

Projeto desenvolvido utilizando:

- Cypress
- Cucumber (BDD)
- JavaScript
- Esbuild

## Funcionalidades automatizadas

### Web

- Login com sucesso
- Login inválido
- Busca de produto existente
- Busca de produto inexistente
- Adicionar produto ao carrinho

### API

- GET na API do Trello
- Validação do status code
- Exibição do campo:
  response.body.data.list.name

## Estrutura do projeto

cypress/

├── e2e/features

├── pages

├── fixtures

└── support

## Execução

Instalar dependências:

```bash
npm install
```

Abrir o Cypress:

```bash
npm run cy:open
```

Executar em modo headless:

```bash
npm run cy:run
```