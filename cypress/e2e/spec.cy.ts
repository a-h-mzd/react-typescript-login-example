describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Login').click()

    cy.url().should('include', '/login')

    cy.get('input').first().type('Some Username')
  })
})