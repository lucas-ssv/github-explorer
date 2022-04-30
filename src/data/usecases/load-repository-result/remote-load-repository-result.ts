import { HttpClient } from '@/data/protocols/http'

export class LoadRepositoryResult {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async load (): Promise<void> {
    await this.httpClient.request({ method: 'GET', url: this.url })
  }
}
