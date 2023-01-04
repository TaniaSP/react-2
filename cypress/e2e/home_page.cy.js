describe('The Home Page', () => {
  it('successfully searches for batman movies', () => {
    cy.visit('/')

    cy.get('.search-input input').type('batman')

    cy.contains('Search').click()

    cy.url().should('include', 'batman')
  })
})
