import LoginPage from "../../pages/loginPage";

describe('Login tests', () => {

    const loginPage = new LoginPage();

    it('Correct login test', () => {
        loginPage.visit();
        loginPage.login();
        cy.url().should('include', 'inventory.html');
    })

    it('Incorrect login test', () => {
        loginPage.visit();
        loginPage.login('standard_user', 'wrong_password');
        loginPage.elements.errorMessage().should('exist');
    })
})