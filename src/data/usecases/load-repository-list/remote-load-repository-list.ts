import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'

export class LoadRepositoryListSpy {
  constructor (
    private readonly url: string,
    private readonly httpGetClientSpy: HttpGetClient
  ) {}

  async load (repository: string): Promise<void> {
    const httpResponse = await this.httpGetClientSpy.get(this.url, { params: { q: repository } })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new BadRequestError()
    }
  }
}
