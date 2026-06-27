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

        cy.url()
          .should("include", "/checkout");

    }

    validarCarrinhoVazio() {

        cy.get("body")
          .should("contain.text", "Cart is empty");

    }

}

export default new CartPage();