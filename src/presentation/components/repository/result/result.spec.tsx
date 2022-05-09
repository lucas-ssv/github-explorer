import { mockRepositoryResult } from '@/data/test'
import { RepositoryResultItem } from '@/presentation/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const history = createMemoryHistory({ initialEntries: ['/:id'] })

describe('RepositoryResultItem', () => {
  test('Should render with correct values', () => {
    const repositoryResultMock = mockRepositoryResult()
    render(
      <Router location={history.location} navigator={history}>
        <RepositoryResultItem repository={repositoryResultMock} />
      </Router>
    )
    expect(screen.getByTestId('repository-full-name')).toHaveTextContent(repositoryResultMock.fullName)
    expect(screen.getByTestId('repository-description-result')).toHaveTextContent(repositoryResultMock.description)
  })

  test('Should open repository github on click', () => {
    const repositoryResultMock = mockRepositoryResult()
    render(
      <Router location={history.location} navigator={history}>
        <RepositoryResultItem repository={repositoryResultMock} />
      </Router>
    )
    const linkHtmlUrl = screen.getByTestId('html-url')
    fireEvent.click(linkHtmlUrl)
    expect(history.location.pathname).toBe(`/${repositoryResultMock.htmlUrl}`)
  })
})
