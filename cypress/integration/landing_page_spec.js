describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should be able to visit the page and render a header with a title', () => {
  cy.get('.header').should('be.visible')
    .get('.title').contains('We The People')
  });

  it('Should be able to visit the page and see a quiz form', () => {
  cy.get('.quiz')
    .should('be.visible')
    // .get('.quiz-header').contains(`Here's why you should take our quiz...`)
    .get('.age-dropdown').should('be.visible')
    .get('.zipcode-input').should('be.visible')
    .get('.statement').should('have.length', 10)
    //additionally test for option values in each of the selects?
});
})
