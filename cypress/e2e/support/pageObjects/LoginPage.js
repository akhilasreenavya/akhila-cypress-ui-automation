class LoginPage {
  // Define web elements

  webUrl() {
   cy.visit("http://angularjs.realworld.io/");
  }
  get emailField() {
    return cy.get('input[type="email"]');
  }

  get passwordField() {
    return cy.get('input[type="password"]');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  get errorMessage() {
    return cy.get('.error-messages li', { timeout: 10000 });
  }

  // Define page methods
  navigateToLogin() {
    cy.contains('a.nav-link', 'Sign in').click();
  }

  fillLoginForm(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
  }

  submitLoginForm() {
    this.submitButton.click();
  }

  checkErrorMessage(errorMessageText) {
    this.errorMessage.contains('email or password is invalid');
  }
}

export default LoginPage;
