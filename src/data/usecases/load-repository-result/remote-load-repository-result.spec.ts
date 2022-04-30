import { LoadRepositoryResult } from '@/data/usecases'
import { HttpStatusCode } from '@/data/protocols/http'
import { HttpClientSpy } from '@/data/test'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: LoadRepositoryResult
  httpClientSpy: HttpClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new LoadRepositoryResult(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('LoadRepositoryResult', () => {
  test('Should LoadRepositoryResult calls HttpClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
  })

  test('Should LoadRepositoryResult returns BadRequestError on status 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new BadRequestError())
  })

  test('Should LoadRepositoryResult returns NotFoundError on status 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('Should LoadRepositoryResult returns ServerError on status 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new ServerError())
  })
})
