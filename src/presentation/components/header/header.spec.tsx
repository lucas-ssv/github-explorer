import { Header } from '@/presentation/components'
import Router, { Router as RouterNavigate } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { faker } from '@faker-js/faker'

jest.mock('react-router-dom', (): any => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

const history = createMemoryHistory()

describe('HeaderComponent', () => {
  test('Should show back button if has param id in the url', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ owner: faker.random.word(), repo: faker.random.word() })
    render(
      <RouterNavigate location={history.location} navigator={history}>
        <Header />
      </RouterNavigate>
    )
    expect(screen.queryByTestId('back-link')).toBeInTheDocument()
  })
})
