import { LoadRepositoryResult } from '@/data/usecases'
import { HttpClientSpy } from '@/data/test'

describe('LoadRepositoryResult', () => {
  test('Should LoadRepositoryResult calls HttpClient with correct url', async () => {
    const url = 'any_url'
    const httpClientSpy = new HttpClientSpy()
    const sut = new LoadRepositoryResult(url, httpClientSpy)
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
  })
})
