import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/page_objects/homePage";
import ProductsPage from "../../support/page_objects/productsPage";

Given("que estou na página inicial", () => {
  HomePage.acessarHome();
});

When("acesso a página de produtos", () => {
  ProductsPage.acessarProdutos();
});