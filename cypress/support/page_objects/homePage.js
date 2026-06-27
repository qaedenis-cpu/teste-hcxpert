class HomePage {

    acessarHome() {
        cy.visit("/", {
            failOnStatusCode: false
        });
    }

}

export default new HomePage();