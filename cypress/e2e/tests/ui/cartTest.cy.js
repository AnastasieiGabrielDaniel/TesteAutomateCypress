import LoginPage from "../../pages/loginPage";
import CartPage from "../../pages/cartPage";

describe('Cart tests', () => {

    const loginPage = new LoginPage();
    const cartPage = new CartPage();

    it('Buy a product test', () => {
        loginPage.visit();
        loginPage.login();
        cy.url().should('include', 'inventory.html');
        cartPage.addToCart();
        cartPage.goToCart();
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light');
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
        cartPage.checkout();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        cartPage.fillform("Daniel", "Anastasiei", "12345");
        cartPage.continue();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light');
        cartPage.finish();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    })

})