describe('State dropdown without a quiz flow', () => {

  beforeEach(() => {
    cy.fixture('stateLegislatorData.json')
      .then((legislatorData) => {cy.intercept('POST', 'https://we-the-people-be.herokuapp.com/api/v2/state_with_quiz', {
        statusCode: 200,
        body: legislatorData
      })
    })
     .visit('http://localhost:3000/')
  })

  it('Should allow the user to select a state using the state dropdown, and be redirected to a new page showing all state legislators', () => {
    cy.get('.state-dropdown').select('Iowa')
      .get('.go-button').click()
      .url().should('include', 'results-dashboard')
      .get('.rep-card').should('have.length', 6)
  });
});
