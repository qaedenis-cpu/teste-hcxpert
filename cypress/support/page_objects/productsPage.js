class ProductsPage {

    acessarProdutos() {

        cy.contains("Products")
          .click();

    }

    pesquisarProduto(produto) {

        cy.get("#search_product")
          .type(produto);

        cy.get("#submit_search")
          .click();

    }

    validarResultadoBusca() {

        cy.contains("Searched Products", {
            matchCase: false
        }).should("be.visible");

    }

    adicionarPrimeiroProduto() {

        cy.get(".product-image-wrapper")
          .first()
          .trigger("mouseover");

        cy.contains("Add to cart")
          .first()
          .click({ force: true });

    }

}

export default new ProductsPage();