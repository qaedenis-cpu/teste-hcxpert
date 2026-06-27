import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {
  cy.visit("/");
});