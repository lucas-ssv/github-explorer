import { RepositoryResult } from '@/domain/models'
import { mockRepositoryResult } from '@/data/test'
import { RepositoryResultItem } from '@/presentation/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'

type SutTypes = {
  repositoryResultMock: RepositoryResult
  history: MemoryHistory
}

const makeSut = (): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/:id'] })
  const repositoryResultMock = mockRepositoryResult()
  render(
    <Router location={history.location} navigator={history}>
      <RepositoryResultItem repository={repositoryResultMock} />
    </Router>
  )
  return {
    repositoryResultMock,
    history
  }
}

describe('RepositoryResultItem', () => {
  test('Should render with correct values', () => {
    const { repositoryResultMock } = makeSut()
    expect(screen.getByTestId('repository-full-name')).toHaveTextContent(repositoryResultMock.fullName)
    expect(screen.getByTestId('repository-description-result')).toHaveTextContent(repositoryResultMock.description)
  })

  test('Should open repository github on click', () => {
    const { repositoryResultMock, history } = makeSut()
    const linkHtmlUrl = screen.getByTestId('html-url')
    fireEvent.click(linkHtmlUrl)
    expect(history.location.pathname).toBe(`/${repositoryResultMock.htmlUrl}`)
  })
})
