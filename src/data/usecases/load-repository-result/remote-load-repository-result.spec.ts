import { LoadRepositoryResult } from '@/data/usecases'
import { HttpClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError } from '@/domain/errors'

describe('LoadRepositoryResult', () => {
  test('Should LoadRepositoryResult calls HttpClient with correct url', async () => {
    const url = 'any_url'
    const httpClientSpy = new HttpClientSpy()
    const sut = new LoadRepositoryResult(url, httpClientSpy)
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
  })

  test('Should LoadRepositoryResult returns BadRequestError on status 400', async () => {
    const httpClientSpy = new HttpClientSpy()
    const sut = new LoadRepositoryResult('any_url', httpClientSpy)
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new BadRequestError())
  })
})
