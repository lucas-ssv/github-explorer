import { faker } from '@faker-js/faker'

describe('Home', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Should load Home with correct initial state', () => {
    cy.getByTestId('submit-button').should('be.disabled')
    cy.getByTestId('loading-wrap').should('not.exist')
    cy.getByTestId('error').should('not.exist')
  })

  it('Should enable submit button if form is valid', () => {
    cy.getByTestId('repository-input').type(faker.random.word())
    cy.getByTestId('submit-button').should('be.enabled')
  })
})
