import promisify from "cypress-promise";
import { getPriceFromText } from "../../utils/format/numerical";

describe(`Test Amazon cart application`, async () => {
  beforeEach(() => {
    cy.visit(Cypress.env("AMAZON_URL"));
  });

  it("TC-1| verify that we are able to add an item into our cart", () => {
    cy.get("#twotabsearchtextbox").type("pedra");
    cy.get("#nav-search-submit-button").click();
    cy.get(".a-link-normal .a-section .s-image").first().click();
    cy.get("#add-to-cart-button").click();
    cy.get("#nav-cart-count")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal("1");
      })
      .end();
  });

  it("TC-2| Check that the sum of items added to cart is correct", async () => {
    const selectProduct = async (order) => {
      cy.get(".a-link-normal .a-section .s-image").first(order).click();

      const price = await promisify(
        cy
          .get(
            '#corePrice_feature_div > .a-section > .a-price.aok-align-center > [aria-hidden="true"]'
          )
          .then(($el) => getPriceFromText($el.text()))
      );

      return { price };
    };

    const products = [];

    cy.get("#twotabsearchtextbox").type("pedra");
    cy.get("#nav-search-submit-button").click();
    products[0] = await selectProduct("first");
    cy.get("#add-to-cart-button").click();

    cy.get("#twotabsearchtextbox").type("papel");
    cy.get("#nav-search-submit-button").click();
    products[1] = await selectProduct("second");
    cy.get("#add-to-cart-button").click();

    cy.get("#twotabsearchtextbox").type("tesoura");
    cy.get("#nav-search-submit-button").click();
    products[2] = await selectProduct("first");
    cy.get("#add-to-cart-button").click();

    const prices = products.map(({ price }) => price);
    const total = prices.reduce((a, b) => a + b);

    cy.get("#nav-cart").click();

    const result = await promisify(
      cy
        .get("#sc-subtotal-amount-buybox > .a-size-medium")
        .then(($el) => $el.text())
    );

    expect(getPriceFromText(result.trim())).to.equal(total);
  });
});
