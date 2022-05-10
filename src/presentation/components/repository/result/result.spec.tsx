import { RepositoryResult } from '@/domain/models'
import { mockRepositoryResult } from '@/data/test'
import { RepositoryResultItem } from '@/presentation/components'
import { render, screen } from '@testing-library/react'
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
    expect(screen.getByTestId('repository-full-name')).toHaveTextContent(repositoryResultMock.full_name)
    expect(screen.getByTestId('repository-description-result')).toHaveTextContent(repositoryResultMock.description)
  })
})
