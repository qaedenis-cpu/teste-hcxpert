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

When("visualizo o carrinho vazio", () => {

    cy.visit("/view_cart");

});


Then("devo visualizar mensagem de carrinho vazio", () => {

    cy.get("body")
      .should("contain.text", "Cart is empty");

});


When("prossigo para checkout", () => {

    cy.contains("Proceed To Checkout")
      .should("be.visible")
      .click();

});


Then("devo visualizar a página de checkout", () => {

    cy.get("body")
      .should("contain.text", "Proceed To Checkout");

});


When("tento prosseguir para checkout", () => {

    cy.get("body").then(($body) => {

        if ($body.text().includes("Proceed To Checkout")) {

            cy.contains("Proceed To Checkout")
              .click({ force: true });

        }

    });

});


Then("não devo conseguir finalizar a compra", () => {

    cy.get("body")
      .should("contain.text", "Cart is empty");

});