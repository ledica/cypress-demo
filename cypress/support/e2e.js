import './commands';

require('cypress-grep')();
Cypress.on('uncaught:exception', () => {
  return false;
});
