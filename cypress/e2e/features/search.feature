Feature: Busca de produtos

Scenario: Buscar produto existente

Given que estou na página inicial

When acesso a página de produtos

And pesquiso por "Tshirt"

Then devo visualizar produtos relacionados


Scenario: Buscar produto inexistente

Given que estou na página inicial

When acesso a página de produtos

And pesquiso por "ProdutoFake123"

Then devo visualizar mensagem de nenhum produto encontrado