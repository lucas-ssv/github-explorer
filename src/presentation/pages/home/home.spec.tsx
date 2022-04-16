import { Home } from '@/presentation/pages'
import { fireEvent, render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

const makeSut = (): void => {
  render(<Home />)
}

describe('HomePage', () => {
  test('Should start with initial state correct', () => {
    makeSut()
    const loadingWrap = screen.queryByTestId('loading-wrap')
    const error = screen.queryByTestId('error')
    const repositoriesWrap = screen.queryByTestId('repositories-wrap')
    const message = screen.getByTestId('message')
    const submitButton = screen.getByTestId('submit-button')
    expect(loadingWrap).toBeNull()
    expect(error).toBeNull()
    expect(repositoriesWrap).toBeNull()
    expect(message).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  test('Should enable submit button if form is valid', () => {
    makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeEnabled()
  })

  test('Should show loading if form is valid', () => {
    makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    const loadingWrap = screen.queryByTestId('loading-wrap')
    expect(loadingWrap).toBeInTheDocument()
  })
})
