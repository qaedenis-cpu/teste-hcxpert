Feature: Carrinho de compras

Scenario: Adicionar produto ao carrinho

Given que estou na página inicial

When acesso a página de produtos

And adiciono o primeiro produto ao carrinho

And visualizo o carrinho

Then devo visualizar o produto adicionado


Scenario: Tentar visualizar carrinho vazio

Given que estou na página inicial

When visualizo o carrinho vazio

Then devo visualizar mensagem de carrinho vazio


Scenario: Realizar checkout com produto no carrinho

Given que estou na página inicial

When acesso a página de produtos

And adiciono o primeiro produto ao carrinho

And visualizo o carrinho

And prossigo para checkout

Then devo visualizar a página de checkout


Scenario: Tentar realizar checkout sem produtos

Given que estou na página inicial

When visualizo o carrinho vazio

And tento prosseguir para checkout

Then não devo conseguir finalizar a compra