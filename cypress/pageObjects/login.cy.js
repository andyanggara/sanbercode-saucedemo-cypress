class Login {
    getUsername = 'input[data-test="username"]';
    getPassword = 'input[data-test="password"]';
    getLoginButton = '[data-test="login-button"]';
    getBurgerMenu = 'button[id="react-burger-menu-btn"]';
    getErrorMessage = '[data-test="error"]';
    getLogoutButton = 'a[id="logout_sidebar_link"]';

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

    verLogoutButton() {
        cy.get(this.getLogoutButton).should("be.visible");
    }

    successLogin() {
        this.setUsername("standard_user");
        this.setPassword("secret_sauce");
        this.clickLogin();
    }
}

export default Login;
