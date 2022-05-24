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

  it('Should allow the user to see a quiz header that provides demographic facts for the US population vs. Congress', () => {
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
  cy.get('.age-dropdown').select('18-28')
    .get('.zipcode-input').type(80030)
    .get('.statement').eq(0).contains('Abortion should be legalized at the federal level.')
    .get('.statement').eq(1).contains('Public schools should be better funded.')
    .get('.statement').eq(2).contains('There should be less restrictions on the process of purchasing a gun.')
    .get('.statement').eq(3).contains('The U.S. government should increase environmental regulations in order to mitigate climate change.')
    .get('.statement').eq(4).contains('The U.S. government should not raise the federal minimum wage.')
    .get('.statement').eq(5).contains('The U.S. government should build a wall along the southern border.')
    .get('.statement').eq(6).contains('Transgender athletes should be able to compete on teams that correspond to their gender identity.')
    .get('.statement').eq(7).contains('The police should not be defunded.')
    .get('.statement').eq(8).contains('Marijuana should be federally legalized.')
    .get('.statement').eq(9).contains('Candidates for office should have a limit on the amount of money they can spend campaigning.')
});

it.only('Should allow the user to submit a fully filled out quiz, and be redirected to a new page with the results', () => {
  cy.get('.age-dropdown').select('18-28')
    .get('.zipcode-input').type(80030)
    .get('.s-disagree').eq(0).check()
    .get('.disagree').eq(1).check()
    .get('.neutral').eq(2).check()
    .get('.agree').eq(3).check()
    .get('.s-agree').eq(4).check()
    .get('.s-disagree').eq(5).check()
    .get('.disagree').eq(6).check()
    .get('.neutral').eq(7).check()
    .get('.agree').eq(8).check()
    .get('.s-agree').eq(9).check()
    .get('.submit-btn').click()
    .url().should('include', 'results-dashboard')
  });
});
