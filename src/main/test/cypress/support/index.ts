export {}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getByTestId: (id: string) => Chainable<Subject>
    }
  }
}

Cypress.Commands.add('getByTestId', (id: string): Cypress.Chainable<JQuery> => {
  return cy.get(`[data-testid=${id}]`)
})
