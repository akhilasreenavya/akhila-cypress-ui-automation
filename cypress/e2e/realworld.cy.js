// Import necessary packages and files
/// <reference types="cypress" />
import LoginPage from "./support/pageObjects/LoginPage.js";
import SettingsPage from "./support/pageObjects/SettingsPage.js";

// Define global variables
const loginPage = new LoginPage();
const settingsPage = new SettingsPage();
const desktopViewportWidth = Cypress.env("desktopViewportWidth");
const desktopViewportHeight = Cypress.env("desktopViewportHeight");
const mobileViewportWidth = Cypress.env("mobileViewportWidth");
const mobileViewportHeight = Cypress.env("mobileViewportHeight");
const newUsername = "newusername_123";

// Define test suite for login feature
describe("Login Feature", () => {
  // Define test cases
  describe("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(desktopViewportWidth, desktopViewportHeight);
      loginPage.webUrl();
      loginPage.navigateToLogin();
    });

    it("TC001 - Login with valid credentials", () => {
      loginPage.fillLoginForm(Cypress.env("valid_email"), Cypress.env("valid_password"));
      loginPage.submitLoginForm();
      cy.url().should("include", "/#");
    });

    it("TC002 - Login with invalid credentials", () => {
      loginPage.fillLoginForm(Cypress.env("invalid_email"), Cypress.env("invalid_password"));
      loginPage.submitLoginForm();
      loginPage.checkErrorMessage("email or password is invalid");
    });
  });

  describe("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(mobileViewportWidth, mobileViewportHeight);
      loginPage.webUrl();
      loginPage.navigateToLogin();
    });

    it("TC003 - Login with valid credentials", () => {
      loginPage.fillLoginForm(Cypress.env("valid_email"), Cypress.env("valid_password"));
      loginPage.submitLoginForm();
      cy.url().should("include", "/#");
    });

    it("TC004 - Login with invalid credentials", () => {
      loginPage.fillLoginForm(Cypress.env("invalid_email"), Cypress.env("invalid_password"));
      loginPage.submitLoginForm();
      loginPage.checkErrorMessage("email or password is invalid");
    });
  });
});

// Define test suite for settings feature
describe("Settings Feature", () => {
  // Define test cases
  describe("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(desktopViewportWidth, desktopViewportHeight);
      loginPage.webUrl();
      loginPage.navigateToLogin();
      loginPage.fillLoginForm(Cypress.env("valid_email"), Cypress.env("valid_password"));
      loginPage.submitLoginForm();
      cy.url().should("include", "/#");
      settingsPage.navigateToSettings();
    });

    it("TC005 - Update bio information", () => {
      const bio = "New bio information";
      settingsPage.fillBioInfo(bio);
      settingsPage.submitSettingsForm();
      settingsPage.checkBioInfo(bio);
    });

    it("TC006 - Update username information", () => {
      settingsPage.fillUsernameInfo(newUsername);
      settingsPage.submitSettingsForm();
      settingsPage.checkUsernameInfo(newUsername);
    });
  });

 });

  describe("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(mobileViewportWidth, mobileViewportHeight);
      loginPage.webUrl();
      loginPage.navigateToLogin();
      loginPage.fillLoginForm(Cypress.env("valid_email"), Cypress.env("valid_password"));
      loginPage.submitLoginForm();
      cy.url().should("include", "/#");
      settingsPage.navigateToSettings();
    });

    it("TC007 - Update bio information", () => {
      const bio = "New bio information";
      settingsPage.fillBioInfo(bio);
      settingsPage.submitSettingsForm();
      settingsPage.checkBioInfo(bio);
    });

    it("TC008 - Update username information", () => {
      const newUsername = "test_user_12386"

    cy.get('[type="email"]').type('replyfromai@gmail.com')
    cy.get('[type="password"]').type('test1234')

    });

   });