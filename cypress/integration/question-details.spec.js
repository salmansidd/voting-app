describe('Voting App End-to-End Testing for Question Details', function() {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Should display the question details page with an App Bar', function() {
    cy.visit('/voting-app')
      .get('[data-hook="app-bar"]')
      .should('have.length', 1)
      .get('[data-hook="home-button"]')
      .should('have.length', 1)
  })
  
  it('Should route to main page from details when the home button is clicked', function() {
    cy.visit('/questions/1')
      .get('[data-hook="home-button"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/questions')
  })

  it('Should display the question details with voting choices', function() {
    cy.intercept('/questions/*').as('getQuestion')
    cy.visit('/questions/1')
      .wait('@getQuestion')
      .get('[data-hook="question-table"]')
      .should('have.length', 1)
  })

  it('Should GET questions from the API with complete details', function() {
    cy.request('https://polls.apiblueprint.org/questions/1').as('question')
    cy.get('@question').should((response) => {
      expect(response.body).to.have.property('url', '/questions/1')
      expect(response.body).to.have.property('question')
      expect(response.body).to.have.property('choices')
      expect(response.body).to.have.property('published_at')
    })
  })

  it('Should POST question choice to the API successfully', function() {
    cy.request('POST', 'https://polls.apiblueprint.org/questions/1/choices/7')
    .then((response) => {
      expect(response.body).to.have.property('choice')
      expect(response.body).to.have.property('votes')
      expect(response.body).to.have.property('url', '/questions/1/choices/7')
    })
  })
  
  it('Should display a modal on vote choice submit', function() {
    cy.intercept('/questions/*').as('getQuestion')
    cy.visit('/questions/2')
      .wait('@getQuestion')
      .get('[data-hook="question-choice"]').eq(2)
      .click()
      .get('[data-hook="submit-vote"]')
      .click()
      .get('[data-hook="info-modal"]')
      .should('have.length', 1)
  })
  
  it('Should route to main page when "Back to Home" button is clicked in Modal', function() {
    cy.intercept('/questions/*').as('getQuestion')
    cy.visit('/questions/2')
      .wait('@getQuestion')
      .get('[data-hook="question-choice"]').eq(3)
      .click()
      .get('[data-hook="submit-vote"]')
      .click()
      .get('[data-hook="info-modal"]')
      .should('have.length', 1)
      .get('[data-hook="show-home"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/questions')
  })
  
  it('Should stay on details page when "Show Results" button is clicked in Modal', function() {
    cy.intercept('/questions/*').as('getQuestion')
    cy.visit('/questions/3')
      .wait('@getQuestion')
      .get('[data-hook="question-choice"]').eq(3)
      .click()
      .get('[data-hook="submit-vote"]')
      .click()
      .get('[data-hook="info-modal"]')
      .should('have.length', 1)
      .get('[data-hook="show-results"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/questions/3')
  })
})
