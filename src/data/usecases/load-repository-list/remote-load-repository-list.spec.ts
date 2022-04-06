import { LoadRepositoryListSpy } from '@/data/usecases'
import { HttpGetClientSpy } from '@/data/test'

describe('LoadRepositoryList', () => {
  test('Should LoadRepositoryList calls HttpGetClient with correct url', async () => {
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new LoadRepositoryListSpy(url, httpGetClientSpy)
    await sut.load('any_repo')
    expect(httpGetClientSpy.url).toBe(url)
  })
})
