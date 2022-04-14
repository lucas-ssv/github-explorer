import { render, screen } from '@testing-library/react'
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
})
