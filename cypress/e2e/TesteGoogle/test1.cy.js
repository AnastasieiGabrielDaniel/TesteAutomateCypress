describe('Suita 1', () => {

    //Testul numarul 1
    it('test 1', () => {
       cy.visit('https://www.google.com/');
       cy.get('#L2AGLb').click();
       cy.get('.gLFyf').type('vlog de it').type('{enter}');
       
       cy.get('#recaptcha-anchor').click();

       cy.get('#results-stats').should('exist');
    
    })

})