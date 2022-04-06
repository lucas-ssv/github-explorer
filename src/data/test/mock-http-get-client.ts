import { HttpGetClient } from '@/data/protocols/http'

export class HttpGetClientSpy implements HttpGetClient {
  url: string

  async get (url: string): Promise<void> {
    this.url = url
  }
}
