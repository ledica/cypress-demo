import { getPriceFromText } from '../../utils/format/numerical';

describe('Test Amazon cart application', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('AMAZON_URL'));
  });

  it(
    'TC-1| Check if you can add an item to cart',
    { tags: ['@amazon', '@cart'] },
    () => {
      cy.searchProduct('pedra');
      cy.get('.a-link-normal .a-section .s-image').first().click();
      cy.get('#add-to-cart-button').click();

      cy.get('#nav-cart-count')
        .invoke('text')
        .then(text => {
          expect(text.trim()).equal('1');
        })
        .end();
    },
  );

  it(
    'TC-2| Check that the sum of items added to cart is correct',
    { tags: ['@amazon', '@cart'] },
    () => {
      cy.searchProduct('pedra');
      cy.get('.a-link-normal .a-section .s-image').first().click();
      cy.get('#add-to-cart-button').click();

      cy.searchProduct('papel');
      cy.get('.a-link-normal .a-section .s-image').first().click();
      cy.get('#add-to-cart-button').click();

      cy.searchProduct('tesoura');
      cy.get('.a-link-normal .a-section .s-image').first().click();
      cy.get('#add-to-cart-button').click();

      cy.get('#nav-cart').click();

      cy.get(
        '.sc-list-item-content > .a-grid-vertical-align > :nth-child(2) > .a-unordered-list > .sc-item-price-block > .a-spacing-mini > .a-size-medium',
      )
        .should('have.length.greaterThan', 0)
        .then($prices => {
          let prices = Cypress._.map($prices, el => el.innerText);
          prices = Cypress._.map(prices, getPriceFromText);
          return Cypress._.sum(prices);
        })
        .then(sumValues => {
          cy.get('#sc-subtotal-amount-buybox > .a-size-medium')
            .then(el => el.text())
            .then(getPriceFromText)
            .should('eq', sumValues);
        })
        .end();
    },
  );
});
