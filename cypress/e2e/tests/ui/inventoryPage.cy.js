import InventoryPage from "../../pages/inventoryPage";
import LoginPage from "../../pages/loginPage";

describe('Inventory tests', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach( () => {
        loginPage.visit();
        loginPage.login();
        cy.url().should('include', 'inventory.html');
    })

    it('Menu button test', () => {
        inventoryPage.openMenu();
        inventoryPage.verifyIfMenuButtonIsOpen();
        inventoryPage.closeMenu();
        inventoryPage.verifyIfMenuButtonIsClosed();
    })

    it('Logout test', () => {
        inventoryPage.logout();
        cy.url().should('not.include', 'inventory.html');
    })
})