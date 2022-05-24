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

  it.only('Should allow the user to see a quiz header that provides demographic facts for the US population vs. Congress', () => {
    cy.get('.quiz-header-container').should('be.visible')
    .get('.quote').contains('The Constitution provides for proportional representation in the U.S. House of Representatives and the seats in the House are apportioned based on state population according to the constitutionally mandated Census. — U.S. Constitution, Amendment XIV, section 2')
    .get('.gender').contains('Female')
    .get('.us-population-rep').should('be.visible')
    .get('.congress-rep').should('be.visible')
    .get('.age').contains('65 or older')
  });

  it('Should be able to visit the page and see a quiz form, and a state select dropdown', () => {
  cy.get('.quiz')
    .should('be.visible')
    .get('.age-dropdown').should('be.visible')
    .get('.zipcode-input').should('be.visible')
    .get('.statement').should('have.length', 10)
    .get('.state-form-container').should('be.visible')
    .get('option').should('have.length', 59)
  });

it('Should allow the user to select an age range, zipcode, and answers to questions', () => {
});

it('Should allow the user to submit a fully filled out quiz, and be redirected to a new page with the results', () => {
});

});
