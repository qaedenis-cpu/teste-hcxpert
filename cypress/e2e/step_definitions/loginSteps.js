import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../support/page_objects/loginPage";

Given("que estou na página de login", () => {

    LoginPage.acessarPaginaLogin();

});

When("informo email válido", () => {

    LoginPage.preencherEmail("teste2024@teste.com.br");

});

When("informo senha válida", () => {

    LoginPage.preencherSenha("teste");

});

When("clico em login", () => {

    LoginPage.clicarEntrar();

});

Then("devo ser autenticado", () => {

    cy.contains("Logged in as")
      .should("be.visible");

});


When("informo email inválido", () => {

    LoginPage.preencherEmail("fake@fake.com");

});

When("informo senha inválida", () => {

    LoginPage.preencherSenha("123456");

});

Then("devo visualizar mensagem de erro", () => {

    cy.contains("Your email or password is incorrect!")
      .should("be.visible");

});