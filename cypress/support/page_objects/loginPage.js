class LoginPage {

    acessarPaginaLogin() {

        cy.visit("/login");

    }

    preencherEmail(email) {

        cy.get('[data-qa="login-email"]')
          .type(email);

    }

    preencherSenha(senha) {

        cy.get('[data-qa="login-password"]')
          .type(senha);

    }

    clicarEntrar() {

        cy.get('[data-qa="login-button"]')
          .click();

    }

}

export default new LoginPage();