/* eslint-disable no-undef */

describe('Home page', () => {
  it('Successfully Loads', () => {
    cy.visit('/');
    cy.contains('Welcome to Gifko Graphix');
  });
});

describe('Portfolio page', () => {
  it('Successfully Loads', () => {
    cy.visit('/portfolio');
    cy.contains('Check out our portfolio');
    cy.url().should('include', '/portfolio');
  });
});

describe.only('Portfolio ID page', () => {
  it('Successfully Loads', () => {
    cy.visit('/portfolio/Afrodisiac');
    cy.url().should('include', '/portfolio/Afrodisiac');
    cy.contains('Afrodisiac');
  });
});

describe('Contact', () => {
  it('Successfully Loads', () => {
    cy.visit('/contact');
    cy.contains('We would love to hear from you!');
    cy.url().should('include', '/contact');
  });
});

describe('About', () => {
  it('Successfully Loads', () => {
    cy.visit('/about');
    cy.contains('What\'s Gifko Graphix?');
    cy.url().should('include', '/about');
  });
});
