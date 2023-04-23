/// <reference types="cypress" />

class SettingsPage {
  navigateToSettings() {
    cy.contains("Settings").click();
  }

  fillBioInfo(bio) {
    cy.get('[placeholder="Short bio about you"]').clear().type(bio);
  }

  submitSettingsForm() {
    cy.contains("Update Settings").click();
  }

  checkBioInfo(bio) {
    cy.get('[placeholder="Short bio about you"]').should("have.value", bio);
  }

  fillUsernameInfo(newUsername) {
    cy.get('[placeholder="Username"]').clear().type(newUsername);
  }

  checkUsernameInfo(newUsername) {
    cy.contains(newUsername);
  }
}

export default SettingsPage;
