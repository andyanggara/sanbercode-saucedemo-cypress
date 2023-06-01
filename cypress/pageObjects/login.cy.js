class Login {
    getUsername = 'input[data-test="username"]';
    getPassword = 'input[data-test="password"]';
    getLoginButton = '[data-test="login-button"]';
    getBurgerMenu = 'button[id="react-burger-menu-btn"]';
    getErrorMessage = '[data-test="error"]';

    setUsername(username) {
        cy.get(this.getUsername).type(username);
    }

    setPassword(password) {
        cy.get(this.getPassword).type(password);
    }

    clickLogin() {
        cy.get(this.getLoginButton).click();
    }

    clickMenu() {
        cy.get(this.getBurgerMenu).click();
    }

    verErrMessage(errMessage) {
        cy.get(this.getErrorMessage).should("have.text", errMessage);
    }
}

export default Login;
