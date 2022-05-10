import { RepositoryItem } from './item'
import { fireEvent, render, screen } from '@testing-library/react'
import { mockRepositoryList } from '@/data/test'
import { RepositoryList } from '@/domain/models'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (repositoryListMock: RepositoryList): SutTypes => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <RepositoryItem repository={repositoryListMock} />
    </Router>
  )
  return {
    history
  }
}

describe('RepositoryItem', () => {
  test('Should render with correct values', () => {
    const repositoryListMock = mockRepositoryList()
    makeSut(repositoryListMock)
    expect(screen.getByTestId('image-profile')).toHaveProperty('src', repositoryListMock.owner.avatar_url)
    expect(screen.getByTestId('image-profile')).toHaveProperty('alt', repositoryListMock.owner.login)
    expect(screen.getByTestId('full-name')).toHaveTextContent(repositoryListMock.full_name)
    expect(screen.getByTestId('description')).toHaveTextContent(repositoryListMock.description)
  })

  test('Should go to repository page', () => {
    const repositoryListMock = mockRepositoryList()
    const { history } = makeSut(repositoryListMock)
    const link = screen.getByTestId('repository-item')
    fireEvent.click(link)
    expect(history.location.pathname).toBe(`/${repositoryListMock.owner.login}/${repositoryListMock.name}`)
  })
})
