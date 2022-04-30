import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError, NotFoundError, ServerError } from '@/domain/errors'

export class LoadRepositoryResult {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async load (): Promise<void> {
    const httpResponse = await this.httpClient.request({ method: 'GET', url: this.url })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.badRequest: throw new BadRequestError()
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.serverError: throw new ServerError()
    }
  }
}
