class LoginPage{

    elements = {
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
    }

    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    failedlogin(){

        this.elements.username().type('standard_user');
        this.elements.password().type('wrong_password');
        this.elements.loginButton().click();
    }

    login(){

        this.elements.username().type('standard_user');
        this.elements.password().type('secret_sauce');
        this.elements.loginButton().click();
    }
}

export default LoginPage;