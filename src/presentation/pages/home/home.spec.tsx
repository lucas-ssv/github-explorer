import { Home } from '@/presentation/pages'
import { LoadRepositoryList } from '@/domain/usecases'
import { RepositoryListModel } from '@/domain/models'
import { mockRepositoryList } from '@/data/test'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'

type SutTypes = {
  loadRepositoryListSpy: LoadRepositoryListSpy
}

class LoadRepositoryListSpy implements LoadRepositoryList {
  callsCount = 0

  async load (repository: string): Promise<RepositoryListModel> {
    this.callsCount++
    return await Promise.resolve(mockRepositoryList())
  }
}

const makeSut = (): SutTypes => {
  const loadRepositoryListSpy = new LoadRepositoryListSpy()
  render(<Home loadRepositoryList={loadRepositoryListSpy} />)
  return {
    loadRepositoryListSpy
  }
}

describe('HomePage', () => {
  test('Should start with initial state correct', async () => {
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

  test('Should enable submit button if form is valid', async () => {
    makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeEnabled()
  })

  test('Should show loading if form is valid', async () => {
    makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    await waitFor(() => screen.getByTestId('repositories-wrap'))
    const loadingWrap = screen.queryByTestId('loading-wrap')
    expect(loadingWrap).toBeInTheDocument()
  })

  test('Should call LoadRepositoryList on submit button', async () => {
    const { loadRepositoryListSpy } = makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    await waitFor(() => screen.getByTestId('repositories-wrap'))
    expect(loadRepositoryListSpy.callsCount).toBe(1)
  })

  test('Should call LoadRepositoryList only once', async () => {
    const { loadRepositoryListSpy } = makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    fireEvent.click(submitButton)
    await waitFor(() => screen.getByTestId('repositories-wrap'))
    expect(loadRepositoryListSpy.callsCount).toBe(1)
  })

  test('Should render RepositoryList on success', async () => {
    makeSut()
    const input = screen.getByTestId('repository-input')
    fireEvent.input(input, { target: { value: faker.random.word() } })
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    await waitFor(() => screen.getByTestId('repositories-wrap'))
    const repositoryItem = screen.getAllByTestId('repository-item')
    expect(repositoryItem).toHaveLength(2)
  })
})
