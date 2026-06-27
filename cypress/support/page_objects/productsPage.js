class ProductsPage {

    acessarProdutos() {
        cy.contains("Products").click();
    }

    pesquisarProduto(produto) {
        cy.get("#search_product").type(produto);
        cy.get("#submit_search").click();
    }

    validarResultadoBusca() {
        cy.contains("Searched Products", {
            matchCase: false
        }).should("be.visible");
    }

    adicionarPrimeiroProduto() {

        cy.get(".product-image-wrapper")
            .first()
            .scrollIntoView()
            .trigger("mouseover");

        cy.get(".product-image-wrapper")
            .first()
            .within(() => {
                cy.contains("Add to cart")
                    .click({ force: true });
            });

        cy.contains("View Cart", { timeout: 10000 })
            .should("be.visible")
            .click();
    }
}

export default new ProductsPage(); 