import { LoadRepositoryListSpy } from '@/data/usecases'
import { HttpGetClientSpy } from '@/data/test'

type SutTypes = {
  sut: LoadRepositoryListSpy
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new LoadRepositoryListSpy(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('LoadRepositoryList', () => {
  test('Should LoadRepositoryList calls HttpGetClient with correct url', async () => {
    const url = 'any_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.load('any_repo')
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should LoadRepositoryList calls HttpGetClient with correct params', async () => {
    const repository = 'any_repo'
    const { sut, httpGetClientSpy } = makeSut()
    await sut.load(repository)
    expect(httpGetClientSpy.options).toEqual({ params: { q: repository } })
  })
})
