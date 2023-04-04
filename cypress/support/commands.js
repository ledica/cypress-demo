Cypress.Commands.add('getText', $select => {
  return cy.get($select).invoke('text');
});

Cypress.Commands.add('setText', ($select, value) => {
  cy.get($select).type(value);
});

Cypress.Commands.add('setName', value => {
  const selector = '#ap_customer_name';
  cy.setText(selector, value);
});

Cypress.Commands.add('setEmail', value => {
  const selector = '#ap_email';
  cy.setText(selector, value);
});

Cypress.Commands.add('setPassword', value => {
  const selector = '#ap_password';
  cy.setText(selector, value);
});

Cypress.Commands.add('setPasswordCheck', value => {
  const selector = '#ap_password_check';
  cy.setText(selector, value);
});

Cypress.Commands.add(
  'setUserData',
  ({ name, email, password, passwordCheck }) => {
    if (name != null) {
      cy.setName(name);
    }

    if (email != null) {
      cy.setEmail(email);
    }

    if (password != null) {
      cy.setPassword(password);
    }

    if (passwordCheck != null) {
      cy.setPasswordCheck(passwordCheck);
    }
  },
);

Cypress.Commands.add('searchProduct', value => {
  cy.get('#twotabsearchtextbox').type(value);
  cy.get('#nav-search-submit-button').click();
});

Cypress.Commands.add('clickAddToCart', () => {
  cy.get('.a-link-normal .a-section .s-image')
    .first()
    .click();
  cy.get('#add-to-cart-button').click();
});

Cypress.Commands.add('loadAccountForm', () => {
  cy.get('#nav-link-accountList-nav-line-1').click();
  cy.get('#createAccountSubmit').click();
});
