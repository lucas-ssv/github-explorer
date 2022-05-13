describe('Home', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Should load Home with correct initial state', () => {
    cy.getByTestId('submit-button').should('be.disabled')
    cy.getByTestId('loading-wrap').should('not.exist')
    cy.getByTestId('error').should('not.exist')
  })
})
