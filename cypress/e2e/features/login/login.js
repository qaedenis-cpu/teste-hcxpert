import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {

    cy.visit("/login");

});

When("informo email válido", () => {

    cy.get('[data-qa="login-email"]')
      .type("teste2024@teste.com.br");

});

When("informo senha válida", () => {

    cy.get('[data-qa="login-password"]')
      .type("teste");

});

When("clico em login", () => {

    cy.get('[data-qa="login-button"]')
      .click();

});

Then("devo ser autenticado", () => {

    cy.contains("Logged in as")
      .should("be.visible");

});

When("informo email inválido", () => {

    cy.get('[data-qa="login-email"]')
      .type("fake@fake.com");

});

When("informo senha inválida", () => {

    cy.get('[data-qa="login-password"]')
      .type("123456");

});

Then("devo visualizar mensagem de erro", () => {

    cy.contains("Your email or password is incorrect!")
      .should("be.visible");

});