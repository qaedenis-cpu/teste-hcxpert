import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {

    cy.visit("/");

});


When("acesso a página de produtos", () => {

    cy.contains("Products")
      .click();

});


When("adiciono o primeiro produto ao carrinho", () => {

    cy.get(".product-image-wrapper")
      .first()
      .trigger("mouseover");

    cy.contains("Add to cart")
      .first()
      .click();

});


When("visualizo o carrinho", () => {

    cy.contains("View Cart")
      .click();

});


Then("devo visualizar o produto adicionado", () => {

    cy.get("#cart_info_table")
      .should("be.visible");

    cy.get(".cart_description")
      .should("have.length.greaterThan", 0);

});