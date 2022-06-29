describe('Quiz with state user flow', () => {

  beforeEach(() => {
    cy.fixture('legislatorData.json')
      .then((legislatorData) => {cy.intercept('POST', 'https://we-the-people-be.herokuapp.com/api/v2/zipcode_with_quiz', {
        statusCode: 200,
        body: legislatorData
      })
    })
     .visit('https://wethepeople.surge.sh/')
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
    cy.get('.state-dropdown').select('Iowa')
      .fixture('stateLegislatorData.json')
      .then((legislatorData) => {cy.intercept('POST', 'https://we-the-people-be.herokuapp.com/api/v2/state_with_quiz', {
      statusCode: 200,
      body: legislatorData
      })
    })
      .get('.go-button').click()
      .get('.rep-name').first().contains('Representative Cynthia Axne')
      .get('.bio-party').first().contains('Party: Democrat')
      .get('.bio-age').first().contains('Age: 57')
      .get('.bio-gender').first().contains('Gender: Female')
      .get('.bio-term').first().contains('Years in office: 4')
      .get('.rep-match').first().contains('76.6% match with your beliefs')
      .get('.abortion-text').first().contains('Planned Parenthood rates this legislator at 100% on Abortion')
      .get('.abortion-match').first().contains('You match 100% with Representative Axne on this issue')
      .get('.mj-text').first().contains('Norml rates this legislator at 42% on Marijuana')
      .get('.mj-match').first().contains('You match 58% with Representative Axne on this issue')
  })

  it('Should have legislator cards that show a separate message if a legislator is not rated by an interest group. ', () => {
    cy.get('.no-rating-text').eq(2).should('be.visible')
  });

});
