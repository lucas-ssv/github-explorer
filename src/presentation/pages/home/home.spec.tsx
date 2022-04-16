import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from '@/presentation/pages'

describe('HomePage', () => {
  test('Should start with initial state correct', () => {
    render(<Home />)
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
    render(<Home />)
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: 'any_repository' } })
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeEnabled()
  })
})
