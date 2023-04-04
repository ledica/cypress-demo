const {
  setName,
  setEmail,
  setPassword,
  setPasswordCheck,
} = require("./account-form");

describe(`Test the Amazon registration screen`, () => {
  beforeEach(() => {
    cy.visit(Cypress.env("AMAZON_URL"));

    cy.get("#nav-link-accountList-nav-line-1").click();
    cy.get("#createAccountSubmit").click();
  });

  const userValidData = {
    name: "John People",
    email: "exemplo@gmail.com",
    password: "C4XkiUPZtI",
  };

  it("TC-1| Filling in all the data", () => {
    setName(userValidData.name);
    setEmail(userValidData.email);
    setPassword(userValidData.password);
    setPasswordCheck(userValidData.password);
  });

  it("TC-2| Error should occur if the name is not filled", () => {
    setEmail(userValidData.email);
    setPassword(userValidData.password);
    setPasswordCheck(userValidData.password);

    cy.get("#auth-continue").click();

    cy.get('[id="ap_customer_name"][class*="a-form-error"]').should("exist");
  });

  it("TC-3| Error should occur if an invalid email", () => {
    const invalidEmail = "exemplogmail.com";

    setName(userValidData.name);
    setEmail(invalidEmail);
    setPassword(userValidData.password);
    setPasswordCheck(userValidData.password);

    cy.get("#auth-continue").click();

    cy.get('[id="ap_email"][class*="a-form-error"]').should("exist");
  });

  it("TC-4| Error should an insufficient password", () => {
    const invalidPassword = "s";

    setName(userValidData.name);
    setEmail(userValidData.email);
    setPassword(invalidPassword);
    setPasswordCheck(invalidPassword);

    cy.get("#auth-continue").click();

    cy.get('[id="ap_password"][class*="a-form-error"]').should("exist");
  });
});
