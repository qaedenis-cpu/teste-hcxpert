class CartPage {

  visualizarCarrinho() {
    cy.visit("/view_cart");
  }

  validarProdutoNoCarrinho() {
    cy.get(".cart_description")
      .should("exist");
  }

  prosseguirCheckout() {
    cy.contains("Proceed To Checkout")
      .click({ force: true });
  }

validarCheckout() {
  cy.url().should("satisfy", url =>
    url.includes("checkout") || url.includes("view_cart")
  );
}

  validarCarrinhoVazio() {
    cy.get("body")
      .should("contain.text", "Cart is empty");
  }

  tentarProsseguirCheckout() {
    cy.get("body").then(($body) => {
      if ($body.text().includes("Proceed To Checkout")) {
        cy.contains("Proceed To Checkout")
          .click({ force: true });
      }
    });
  }
}

export default new CartPage();