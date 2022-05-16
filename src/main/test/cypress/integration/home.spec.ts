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

  it('Should show loading if form is valid', () => {
    cy.getByTestId('repository-input').type(faker.random.word())
    cy.getByTestId('submit-button').click()
    cy.getByTestId('loading-wrap').should('exist')
  })

  it('Should not present loading on finish request', () => {
    cy.getByTestId('repository-input').type(faker.random.word())
    cy.getByTestId('submit-button').click()
      .getByTestId('loading-wrap').should('exist')
      .getByTestId('text-search-button').should('not.exist')
      .getByTestId('loading-wrap').should('not.exist')
      .getByTestId('text-search-button').should('exist')
  })

  it('Should clear input if form is valid', () => {
    cy.getByTestId('repository-input').type(faker.random.word())
    cy.getByTestId('submit-button').click()
    cy.getByTestId('repository-input').should('be.empty')
  })

  it('Should focus input if form is valid', () => {
    cy.getByTestId('repository-input').type(faker.random.word())
    cy.getByTestId('submit-button').click()
    cy.getByTestId('repository-input').should('be.focused')
  })

  it('Should call LoadRepositoryList only once', () => {
    const repository = faker.random.word()
    cy.intercept({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=${repository}`
    }, {
      statusCode: 200,
      fixture: 'load-repository-list.json'
    }).as('request')
    cy.getByTestId('repository-input').type(repository)
    cy.getByTestId('form-submit').submit()
    cy.getByTestId('form-submit').submit()
    cy.get('@request.all').should('have.length', 1)
  })

  it('Should present error on UnexpectedError', () => {
    const repository = faker.random.word()
    cy.intercept({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=${repository}`
    }, {
      statusCode: faker.random.arrayElement([400, 404, 500]),
      body: {
        error: faker.random.words()
      }
    })
    cy.getByTestId('repository-input').type(repository)
    cy.getByTestId('submit-button').click()
    cy.getByTestId('error').should('exist')
  })

  it('Should present badRequestError on 400', () => {
    const repository = faker.random.word()
    cy.intercept({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=${repository}`
    }, {
      statusCode: 400
    })
    cy.getByTestId('repository-input').type(repository)
    cy.getByTestId('submit-button').click()
    cy.getByTestId('error').should('have.text', 'Ocorreu um erro na requisição. Tente novamente mais tarde')
  })

  it('Should present notFoundError on 404', () => {
    const repository = faker.random.word()
    cy.intercept({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=${repository}`
    }, {
      statusCode: 404
    })
    cy.getByTestId('repository-input').type(repository)
    cy.getByTestId('submit-button').click()
    cy.getByTestId('error').should('have.text', 'O servidor não pode encontrar o recurso solicitado')
  })

  it('Should present serverError on 500', () => {
    const repository = faker.random.word()
    cy.intercept({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=${repository}`
    }, {
      statusCode: 500
    })
    cy.getByTestId('repository-input').type(repository)
    cy.getByTestId('submit-button').click()
    cy.getByTestId('error').should('have.text', 'O servidor encontrou uma situação com a qual não sabe lidar')
  })

  it('Should load user page on click repository', () => {
    const repository = faker.random.word()
    cy.intercept({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=${repository}`
    }, {
      statusCode: 200,
      fixture: 'load-repository-list.json'
    }).as('request')
    cy.getByTestId('repository-input').type(repository)
    cy.getByTestId('form-submit').submit()
    cy.wait('@request')
    cy.getByTestId('repository-item').eq(0).click()
    cy.url().should('eq', 'http://localhost:8080/any_login/any_name')
  })
})
