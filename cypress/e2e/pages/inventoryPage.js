class InventoryPage {

    elements = {
        menuButton: () => cy.get('#react-burger-menu-btn'),
        closeMenuButton: () => cy.get('#react-burger-cross-btn'),
        menu: () => cy.get('.bm-menu-wrap'),
        logoutButton: () => cy.get('#logout_sidebar_link'),
    }

    openMenu() {
        this.elements.menuButton().click();
    }

    closeMenu() {
        this.elements.closeMenuButton().click();
    }

    verifyIfMenuButtonIsOpen() {
        this.elements.menu()
        .should('have.attr', 'aria-hidden', 'false');
    }

    verifyIfMenuButtonIsClosed() {
        this.elements.menu()
        .should('have.attr', 'aria-hidden', 'true');
    }

    logout() {
        this.openMenu();
        this.elements.logoutButton().click();
    }
}

export default InventoryPage;