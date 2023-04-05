describe('Test the Amazon registration screen', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('AMAZON_URL'));
    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#createAccountSubmit').click();
  });

  const name = 'John People';
  const email = 'exemplo@gmail.com';
  const password = 'C4XkiUPZtI';

  it('TC-1| Filling in all the data', { tags: ['@amazon', '@account'] }, () => {
    cy.get('#ap_customer_name').type(name);
    cy.get('#ap_email').type(email);
    cy.get('#ap_password').type(password);
    cy.get('#ap_password_check').type(password);
  });

  it(
    'TC-2| Error should occur if the name is not filled',
    { tags: ['@amazon', '@account'] },
    () => {
      cy.get('#ap_email').type(email);
      cy.get('#ap_password').type(password);
      cy.get('#ap_password_check').type(password);

      cy.get('#auth-continue').click();
      cy.get('[id="ap_customer_name"][class*="a-form-error"]').should('exist');
    },
  );

  it(
    'TC-3| Error should occur if an invalid email',
    { tags: ['@amazon', '@account'] },
    () => {
      const invalidEmail = 'exemplogmail.com';

      cy.get('#ap_customer_name').type(name);
      cy.get('#ap_email').type(invalidEmail);
      cy.get('#ap_password').type(password);
      cy.get('#ap_password_check').type(password);

      cy.get('#auth-continue').click();
      cy.get('[id="ap_email"][class*="a-form-error"]').should('exist');
    },
  );

  it(
    'TC-4| Error should an insufficient password',
    { tags: ['@amazon', '@account'] },
    () => {
      const invalidPassword = 's';

      cy.get('#ap_customer_name').type(name);
      cy.get('#ap_email').type(email);
      cy.get('#ap_password').type(invalidPassword);
      cy.get('#ap_password_check').type(invalidPassword);

      cy.get('#auth-continue').click();
      cy.get('[id="ap_password"][class*="a-form-error"]').should('exist');
    },
  );
});
