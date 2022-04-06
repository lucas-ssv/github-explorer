import { LoadRepositoryListSpy } from '@/data/usecases'
import { HttpGetClientSpy, mockRepositoryList } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: LoadRepositoryListSpy
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new LoadRepositoryListSpy(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('LoadRepositoryList', () => {
  test('Should LoadRepositoryList calls HttpGetClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.load(faker.random.word())
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should LoadRepositoryList calls HttpGetClient with correct params', async () => {
    const repository = faker.random.word()
    const { sut, httpGetClientSpy } = makeSut()
    await sut.load(repository)
    expect(httpGetClientSpy.options).toEqual({ params: { q: repository } })
  })

  test('Should LoadRepositoryList returns BadRequestError on status 400', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.load(faker.random.word())
    await expect(promise).rejects.toThrow(new BadRequestError())
  })

  test('Should LoadRepositoryList returns NotFoundError on status 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load(faker.random.word())
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('Should LoadRepositoryList returns ServerError on status 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.load(faker.random.word())
    await expect(promise).rejects.toThrow(new ServerError())
  })

  test('Should LoadRepositoryList returns RepositoryList on status 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResponseMock = mockRepositoryList()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponseMock
    }
    const httpResponse = await sut.load(faker.random.word())
    expect(httpResponse).toEqual(httpResponseMock)
  })
})
