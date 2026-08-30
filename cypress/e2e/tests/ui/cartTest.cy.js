import LoginPage from "../../pages/loginPage";
import CartPage from "../../pages/cartPage";
import { inform, random } from "../../data/inform";
import { faker } from '@faker-js/faker';

describe('Cart tests', () => {

    const loginPage = new LoginPage();
    const cartPage = new CartPage();

    it('Buy a product test', () => {
        loginPage.visit();
        loginPage.login();
        cy.url().should('include', 'inventory.html');
        cartPage.addToCart();
        cartPage.goToCart();
        cartPage.inventory().should('contain', inform.inventoryInfo);
        cartPage.title().should('contain', inform.myCart);
        cartPage.checkout();
        cartPage.title().should('contain', inform.myInfo);
        cartPage.fillform();
        cartPage.continue();
        cartPage.title().should('contain', inform.overview);
        cartPage.inventory().should('contain', inform.inventoryInfo);
        cartPage.finish();
        cartPage.title().should('contain', inform.completed);
        cartPage.complete().should('contain', inform.finalOrder)
    })
})