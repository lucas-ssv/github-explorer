import { LoadRepositoryListSpy } from '@/data/usecases'
import { HttpGetClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'

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

  test('Should LoadRepositoryList returns BadRequestError on status 400', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.load('any_repo')
    await expect(promise).rejects.toThrow(new BadRequestError())
  })

  test('Should LoadRepositoryList returns NotFoundError on status 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load('any_repo')
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('Should LoadRepositoryList returns ServerError on status 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.load('any_repo')
    await expect(promise).rejects.toThrow(new ServerError())
  })
})
