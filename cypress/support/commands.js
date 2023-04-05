Cypress.Commands.add('searchProduct', value => {
  cy.get('#twotabsearchtextbox').type(value);
  cy.get('#nav-search-submit-button').click();
});
