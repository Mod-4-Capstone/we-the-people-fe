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

  it('Should show each legislators bio information, and ratings', () => {
    cy.get('.state-dropdown').select('Iowa')
      .get('.go-button').click()
      .get('.rep-name').first().contains('Representative Cynthia Axne')
      .get('.bio-party').first().contains('Party: Democrat')
      .get('.bio-age').first().contains('Age: 57')
      .get('.bio-gender').first().contains('Gender: Female')
      .get('.bio-term').first().contains('Years in office: 4')
      .get('.abortion-text').first().contains('Planned Parenthood rates this legislator at 100% on Abortion')
      .get('.mj-text').first().contains('Norml rates this legislator at 42% on Marijuana')
      .get('.contact-text').first().contains('Contact Representative Axne here')
    });

    it('Should allow the user to click a legislators contact info, and be redirected to their personal contact page', () => {
      cy.get('.state-dropdown').select('Iowa')
        .get('.go-button').click()
        .url().should('include', 'results-dashboard')
    });
});
