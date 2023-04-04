describe('Test the Amazon registration screen', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('AMAZON_URL'));
    cy.loadAccountForm();
  });

  const name = 'John People';
  const email = 'exemplo@gmail.com';
  const password = 'C4XkiUPZtI';

  it('TC-1| Filling in all the data', { tags: ['@amazon', '@account'] }, () => {
    cy.setUserData({ name, email, password, passwordCheck: password });
  });

  it(
    'TC-2| Error should occur if the name is not filled',
    { tags: ['@amazon', '@account'] },
    () => {
      cy.setUserData({ email, password, passwordCheck: password });

      cy.get('#auth-continue').click();
      cy.get('[id="ap_customer_name"][class*="a-form-error"]').should('exist');
    },
  );

  it(
    'TC-3| Error should occur if an invalid email',
    { tags: ['@amazon', '@account'] },
    () => {
      const invalidEmail = 'exemplogmail.com';

      cy.setUserData({
        name,
        email: invalidEmail,
        password,
        passwordCheck: password,
      });

      cy.get('#auth-continue').click();
      cy.get('[id="ap_email"][class*="a-form-error"]').should('exist');
    },
  );

  it(
    'TC-4| Error should an insufficient password',
    { tags: ['@amazon', '@account'] },
    () => {
      const invalidPassword = 's';

      cy.setUserData({
        name,
        email,
        password: invalidPassword,
        passwordCheck: invalidPassword,
      });

      cy.get('#auth-continue').click();
      cy.get('[id="ap_password"][class*="a-form-error"]').should('exist');
    },
  );
});
