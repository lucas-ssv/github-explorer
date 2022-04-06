import { HttpGetClient, Options } from '@/data/protocols/http'

export class HttpGetClientSpy implements HttpGetClient {
  url: string
  options: Options

  async get (url: string, options?: Options): Promise<void> {
    this.url = url
    this.options = options
  }
}
