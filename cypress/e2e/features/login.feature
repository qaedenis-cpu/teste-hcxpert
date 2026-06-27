Feature: Login

Scenario: Login com sucesso

Given que estou na página de login

When informo email válido

And informo senha válida

And clico em login

Then devo ser autenticado


Scenario: Login inválido

Given que estou na página de login

When informo email inválido

And informo senha inválida

And clico em login

Then devo visualizar mensagem de erro