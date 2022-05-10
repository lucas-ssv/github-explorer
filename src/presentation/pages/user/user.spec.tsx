import { mockRepositoryResult } from '@/data/test'
import { LoadRepositoryResultSpy } from '@/domain/test'
import { User } from '@/presentation/pages'
import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const history = createMemoryHistory({ initialEntries: ['/:id'] })

describe('UserPage', () => {
  test('Should start with initial correct state', async () => {
    const loadRepositoryResultSpy = new LoadRepositoryResultSpy()
    const repositoryResultMock = mockRepositoryResult()
    jest.spyOn(loadRepositoryResultSpy, 'load').mockResolvedValueOnce(repositoryResultMock)
    render(
      <Router location={history.location} navigator={history}>
        <User loadRepositoryResult={loadRepositoryResultSpy} />
      </Router>
    )
    await waitFor(() => screen.getByTestId('repository-info'))
    expect(screen.getByTestId('avatar-url')).toHaveProperty('src', repositoryResultMock.owner.avatar_url)
    expect(screen.getByTestId('avatar-url')).toHaveProperty('alt', repositoryResultMock.owner.login)
    expect(screen.getByTestId('repository-name')).toHaveTextContent(repositoryResultMock.name)
    expect(screen.getByTestId('repository-description')).toHaveTextContent(repositoryResultMock.description)
    expect(screen.getByTestId('stars-count')).toHaveTextContent(String(repositoryResultMock.stargazers_count))
    expect(screen.getByTestId('forks-count')).toHaveTextContent(String(repositoryResultMock.forks_count))
    expect(screen.getByTestId('issues-count')).toHaveTextContent(String(repositoryResultMock.open_issues_count))
  })
})
