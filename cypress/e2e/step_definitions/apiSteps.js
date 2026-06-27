import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que possuo acesso à API do Trello", () => {
  cy.log("Iniciando teste da API Trello");
});

When("realizo uma requisição GET para a action", () => {
  cy.request({
    method: "GET",
    url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("devo receber status code 200", () => {
  expect(response.status).to.eq(200);
});

Then("devo exibir o nome da lista", () => {
  const listName = response.body.data.list.name;
  cy.log(listName);
  expect(listName).to.not.be.empty;
});