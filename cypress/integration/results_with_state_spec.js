describe('Quiz with state user flow', () => {

  beforeEach(() => {
    cy.fixture('legislatorData.json')
      .then((legislatorData) => {cy.intercept('POST', 'https://we-the-people-be.herokuapp.com/api/v2/zipcode_with_quiz', {
        statusCode: 200,
        body: legislatorData
      })
    })
     .visit('http://localhost:3000/')
      .get('.age-dropdown').select('18-28')
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
  })

  it('Should allow the user to submit a fully filled out quiz, and be redirected to a new page with the results', () => {
    cy.url().should('include', 'results-dashboard')
    .get('.user-demo').should('be.visible')
  });

  it('Should allow the user to select a state after submitting a quiz, and the legislators for that state, and their comparison percentages', () => {
    cy.url().should('include', 'results-dashboard')
    .get('.user-demo').should('be.visible')
  });
})
