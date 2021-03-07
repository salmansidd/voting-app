describe('Voting App End-to-End Testing for Questions Home Page', function() {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.intercept('**/questions').as('getQuestions')
  });
  
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Should display the main page with voting questions', function() {
    cy.visit('/voting-app')
      .wait('@getQuestions')
      .get('[data-hook="app-header"]')
      .should('have.length', 1)
      .get('[data-hook="create-question"]')
      .should('have.length', 1)
      .get('[data-hook="questions-container"]')
      .should('have.length', 1)
  })

  it('Should display the main page with an App Bar', function() {
    cy.visit('/voting-app')
      .get('[data-hook="app-bar"]')
      .should('have.length', 1)
      .get('[data-hook="home-button"]')
      .should('have.length', 1)
  })
  
  it('Should GET all questions from the API with complete details', function() {
    cy.request('https://polls.apiblueprint.org/questions').as('questions')
    cy.get('@questions').should((response) => {
      response.body.forEach(question => {
        expect(question).to.have.property('url')
        expect(question).to.have.property('question')
        expect(question).to.have.property('choices')
        expect(question).to.have.property('published_at')
      });
    })
  })

  it('Should navigate to question details on clicking a "Vote Now" button', function() {
    cy.visit('/voting-app')
      .wait('@getQuestions')
      .get('[data-hook="vote-button"]').last().click()
      .url()
      .should('include', '/questions/1')
  })
})
