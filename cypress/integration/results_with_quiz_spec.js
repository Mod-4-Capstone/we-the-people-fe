describe('Landing Page', () => {

  beforeEach(() => {
    cy.fixture('legislatorData.json')
      .then((legislatorData) => {cy.intercept('POST', 'https://we-the-people-be.herokuapp.com/api/v2/zipcode_with_quiz', {
        statusCode: 200,
        body: legislatorData
      })
    })
     .visit('http://localhost:3000/')
  })

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
    .get('.age').contains('64 or younger')
  });

  it('Should be able to visit the page and see a quiz form, and a state select dropdown', () => {
  cy.get('.quiz')
    .should('be.visible')
    .get('.age-dropdown').should('be.visible')
    .get('.zipcode-input').should('be.visible')
    .get('.statement').should('have.length', 10)
    .get('.state-form-container').should('be.visible')
    .get('.state-dropdown > option').should('have.length', 50)
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
})

describe('Quiz with zipcode user flow', () => {

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

  it('Should allow the user to submit a fully filled out quiz, and be redirected to a new page with the results', () => {
    cy.url().should('include', 'results-dashboard')
    .get('.user-demo').should('be.visible')
  });

  it('Should show a quiz results summary after the user has taken a quiz', () => {
    cy.url().should('include', 'results-dashboard')
      .get('.user-demo > h2').should('be.visible').contains(`What's important to you:`)
      .get('.result-tile').eq(0).should('be.visible')
      .get('.result-tile').eq(1).should('be.visible')
      .get('.result-tile').eq(2).should('be.visible')
    });

  it('Should show all of the legislators associated with the zipcode provided on the quiz', () => {
  cy.url().should('include', 'results-dashboard')
    .get('.rep-card').should('have.length', 3)
    .get('.rep-name').first().contains('Senator John Hickenlooper')
    .get('.rep-name').last().contains('Representative Diana DeGette')
  });

  it('Should allow the user to see the bio info and match percentage for a legislator', () => {
    cy.url().should('include', 'results-dashboard')
    .get('.rep-name').first().contains('Senator John Hickenlooper')
    .get('.bio-party').first().contains('Party: Democrat')
    .get('.bio-age').first().contains('Age: 70')
    .get('.bio-gender').first().contains('Gender: Male')
    .get('.bio-term').first().contains('Years in office: 2')
    .get('.rep-match').first().contains('97.5% match with your beliefs')

  });

  it('Should allow the user to see all of the special interest group ratings and their match percentage per issue for each legislator', () => {
    cy.url().should('include', 'results-dashboard')
    .get('.rep-name').first().contains('Senator John Hickenlooper')
    .get('.bio-party').first().contains('Party: Democrat')
    .get('.abortion-text').first().contains('Planned Parenthood rates this legislator at 100% on Abortion')
    .get('.abortion-match').first().contains('You match 100% with Senator Hickenlooper on this issue')
    .get('.mj-text').first().contains('Norml rates this legislator at 92% on Marijuana')
    .get('.mj-match').first().contains('You match 8% with Senator Hickenlooper on this issue')
  });

  it('Should allow the user to click the start over button and return to the landing page', () => {
    cy.get('.home-btn').click()
      .url().should('include', '/')
      .get('.quiz-header-container').should('be.visible')
      .get('.quiz').should('be.visible')
  });
});

  describe('Quiz with zipcode user flow - sad paths', () => {

    beforeEach(() => {
        cy.visit(('http://localhost:3000/'))
    });

  it('Should direct the user to an error page if an invalid zipcode is entered on the form', () => {
    cy.get('.age-dropdown').select('18-28')
     .get('.zipcode-input').type(33333)
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
     .get('.error-container').should('be.visible')
     .get('.error-container > h1').contains('Whoops! Something went wrong.')
  });

  it('Should not let the user submit the form if a form field is missing', () => {
    cy.get('.age-dropdown').select('18-28')
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
     .url().should('include', '/')
  });
})
