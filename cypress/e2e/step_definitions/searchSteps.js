import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {

    cy.visit("/");

});


When("acesso a página de produtos", () => {

    cy.contains("Products")
      .click();

});


When("pesquiso por {string}", (produto) => {

    cy.get("#search_product")
      .type(produto);

    cy.get("#submit_search")
      .click();

});


Then("devo visualizar produtos relacionados", () => {

    cy.get(".features_items")
      .should("be.visible");

});


Then("devo visualizar mensagem de nenhum produto encontrado", () => {

    cy.contains("Searched Products")
      .should("be.visible");

    cy.get(".product-image-wrapper")
      .should("have.length", 0);

});