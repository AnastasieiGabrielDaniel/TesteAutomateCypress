class CartPage{

    elements = {
        product: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        cart: () => cy.get('[data-test="shopping-cart-link"]'),
        checkout: () => cy.get('[data-test="checkout"]'),
        formFirst: () => cy.get('[data-test="firstName"]'),
        formLast: () => cy.get('[data-test="lastName"]'),
        formZip: () => cy.get('[data-test="postalCode"]'),
        continue: () => cy.get('[data-test="continue"]'),
        finish: () => cy.get('[data-test="finish"]'),

    }

    addToCart() {
        this.elements.product().click()
    }
    goToCart() {
        this.elements.cart().click()
    }
    checkout() {
        this.elements.checkout().click()
    }
    fillform() {
        this.elements.formFirst().type('Daniel')
        this.elements.formLast().type('Anastasiei')
        this.elements.formZip().type('12345')
    }
    continue() {
        this.elements.continue().click()
    }
    finish() {
        this.elements.finish().click()
    }
}

export default CartPage;