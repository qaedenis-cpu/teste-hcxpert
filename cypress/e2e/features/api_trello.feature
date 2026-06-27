Feature: API Trello

Scenario: Consultar ação no Trello

Given que possuo acesso à API do Trello

When realizo uma requisição GET para a action

Then devo receber status code 200

And devo exibir o nome da lista