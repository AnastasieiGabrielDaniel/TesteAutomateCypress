import { inform, random } from "../data/inform";

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
        title: () => cy.get('[data-test="title"]'),
        inventory: () => cy.get('[data-test="inventory-item-name"]'),
        complete: () => cy.get('[data-test="complete-header"]')
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

    fillform(first=random.firstName, last=random.lastName, zip=random.postalCode) {
        this.elements.formFirst().type(first)
        this.elements.formLast().type(last)
        this.elements.formZip().type(zip)
    }

    continue() {
        this.elements.continue().click()
    }

    finish() {
        this.elements.finish().click()
    }

    title() {
        return this.elements.title();
    }

    inventory() {
        return this.elements.inventory();
    }

    complete() {
        return this.elements.complete();
    }
}

export default CartPage;