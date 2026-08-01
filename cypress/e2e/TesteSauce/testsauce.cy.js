describe('Suita 2', () => {
    
//Test with incorect username or password
    it('Incorect login test', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('wrong_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');
    })

//Test with correct username and password
    it('Correct login test', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
    })

//Test with correct username and password and logout
    it('Logout test', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('not.include', 'inventory.html');
    })

//Test to check if I can open and close the menu button
    it('Menu button test', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'false');
        cy.get('#react-burger-cross-btn').click();
        cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
    })

//Test for adding a product to the cart and after that checking if the product is in the cart and removing it from the cart
    it('Add to cart a product and remove it test', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light');
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="inventory-item-name"]').should('not.exist');
    })    

// Test to check if I can by a product
    it('Buy a product test', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light');
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        cy.get('[data-test="firstName"]').type('Daniel');
        cy.get('[data-test="lastName"]').type('Anastasiei');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light');
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    })

//Test verifying whether product details can be accessed and if the "Back to product" button works
    it('Products details and back to products button', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light');
        cy.get('[data-test="back-to-products"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
        cy.get('[data-test="title"]').should('be.visible');
        cy.get('[data-test="title"]').should('contain', 'Products');
    })

})
