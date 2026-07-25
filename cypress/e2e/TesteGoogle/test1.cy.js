describe('Suita 1', () => {

    //Testul numarul 1
    it('test 1', () => {
       cy.visit('https://www.google.com/');
       cy.get('#L2AGLb').click();
       cy.get('.gLFyf').type('vlod de it').type('{enter}');
       
       //cy.get('.recaptcha-checkbox-border').check();

       cy.get('#results-stats').should('exist');
        //cy.get('.LC20lb MBeuO DKV0Md').should('exist');
    })

})