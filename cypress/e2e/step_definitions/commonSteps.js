import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {
  cy.visit("/");
});

When("acesso a página de produtos", () => {

    cy.contains("Products")
      .click();

});