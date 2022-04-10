import { RepositoryListModel } from '@/domain/models'
import { LoadRepositoryList } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'

export class LoadRepositoryListSpy implements LoadRepositoryList {
  constructor (
    private readonly url: string,
    private readonly httpGetClientSpy: HttpClient
  ) {}

  async load (repository: string): Promise<RepositoryListModel> {
    const httpResponse = await this.httpGetClientSpy.request({ method: 'GET', url: this.url, params: { q: repository } })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new BadRequestError()
    }
  }
}
