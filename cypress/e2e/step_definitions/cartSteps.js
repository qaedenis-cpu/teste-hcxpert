import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/page_objects/productsPage";
import CartPage from "../../support/page_objects/cartPage";

When("adiciono o primeiro produto ao carrinho", () => {
  ProductsPage.adicionarPrimeiroProduto();
});

When("visualizo o carrinho", () => {
  CartPage.visualizarCarrinho();
});

Then("devo visualizar o produto adicionado", () => {
  CartPage.validarProdutoNoCarrinho();
});

When("visualizo o carrinho vazio", () => {
  CartPage.visualizarCarrinho();
});

Then("devo visualizar mensagem de carrinho vazio", () => {
  CartPage.validarCarrinhoVazio();
});

When("prossigo para checkout", () => {
  CartPage.prosseguirCheckout();
});

Then("devo visualizar a página de checkout", () => {
  CartPage.validarCheckout();
});

Then("devo visualizar o produto selecionado", () => {
  CartPage.validarProdutoNoCarrinho();
});

When("tento prosseguir para checkout", () => {
  CartPage.tentarProsseguirCheckout();
});

Then("não devo conseguir finalizar a compra", () => {
  CartPage.validarCarrinhoVazio();
});