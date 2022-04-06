import { HttpGetClient } from '@/data/protocols/http'

export class LoadRepositoryListSpy {
  constructor (
    private readonly url: string,
    private readonly httpGetClientSpy: HttpGetClient
  ) {}

  async load (repository: string): Promise<void> {
    await this.httpGetClientSpy.get(this.url, { params: { q: repository } })
  }
}
