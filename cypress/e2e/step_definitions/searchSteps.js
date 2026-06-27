import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/page_objects/productsPage";

When("pesquiso por {string}", (produto) => {
  ProductsPage.pesquisarProduto(produto);
});

Then("devo visualizar produtos relacionados", () => {
  cy.get(".features_items").should("be.visible");
});

Then("devo visualizar mensagem de nenhum produto encontrado", () => {
  ProductsPage.validarResultadoBusca();
  cy.get(".product-image-wrapper").should("have.length", 0);
});