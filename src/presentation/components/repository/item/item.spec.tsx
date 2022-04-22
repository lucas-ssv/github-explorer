import { RepositoryItem } from './item'
import { render, screen } from '@testing-library/react'
import { mockRepositoryList } from '@/data/test'

const makeSut = (repositoryListMock = mockRepositoryList()): void => {
  render(<RepositoryItem repository={repositoryListMock} />)
}

describe('RepositoryItem', () => {
  test('Should render with correct values', () => {
    const repositoryListMock = mockRepositoryList()
    makeSut(repositoryListMock)
    expect(screen.getByTestId('image-profile')).toHaveProperty('src', repositoryListMock.owner.avatar_url)
    expect(screen.getByTestId('image-profile')).toHaveProperty('alt', repositoryListMock.owner.name)
    expect(screen.getByTestId('full-name')).toHaveTextContent(repositoryListMock.fullName)
    expect(screen.getByTestId('description')).toHaveTextContent(repositoryListMock.description)
  })
})
