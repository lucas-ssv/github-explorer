import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { BadRequestError } from '@/domain/errors'

export class LoadRepositoryListSpy {
  constructor (
    private readonly url: string,
    private readonly httpGetClientSpy: HttpGetClient
  ) {}

  async load (repository: string): Promise<void> {
    const httpResponse = await this.httpGetClientSpy.get(this.url, { params: { q: repository } })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.badRequest: throw new BadRequestError()
    }
  }
}
