describe('Voting App End-to-End Testing for Creating a Question', function() {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
  
  it('Should open the create question form on button click', function() {
    cy.visit('/voting-app')
      .get('[data-hook="create-question"]')
      .click()
      .get('[data-hook="question-form"]')
      .should('have.length', 1)
  })

  it('Should POST create question request to the API successfully', function() {
    cy.fixture('question-body').then((body) => {
      cy.request({
        method: 'POST',
        url: 'https://polls.apiblueprint.org/questions?page=1',
        headers: {
          'Content-Type': 'application/json',     
        },
        body
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
})
