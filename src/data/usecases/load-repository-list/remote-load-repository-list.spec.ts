import { LoadRepositoryListSpy } from '@/data/usecases'
import { HttpClientSpy, mockRepositoryList } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: LoadRepositoryListSpy
  httpClientSpy: HttpClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new LoadRepositoryListSpy(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('LoadRepositoryList', () => {
  test('Should LoadRepositoryList calls HttpGetClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    await sut.load(faker.random.word())
    expect(httpClientSpy.url).toBe(url)
  })

  test('Should LoadRepositoryList calls HttpGetClient with correct params', async () => {
    const repository = faker.random.word()
    const { sut, httpClientSpy } = makeSut()
    await sut.load(repository)
    expect(httpClientSpy.params).toEqual({ q: repository })
  })

  test('Should LoadRepositoryList returns BadRequestError on status 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.load(faker.random.word())
    await expect(promise).rejects.toThrow(new BadRequestError())
  })

  test('Should LoadRepositoryList returns NotFoundError on status 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load(faker.random.word())
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('Should LoadRepositoryList returns ServerError on status 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.load(faker.random.word())
    await expect(promise).rejects.toThrow(new ServerError())
  })

  test('Should LoadRepositoryList returns RepositoryList on status 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResponseMock = mockRepositoryList()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponseMock
    }
    const httpResponse = await sut.load(faker.random.word())
    expect(httpResponse).toEqual(httpResponseMock)
  })
})
