import { HttpGetClient } from '../protocols/http'

export class HttpGetClientSpy implements HttpGetClient {
  url: string

  async get (url: string): Promise<void> {
    this.url = url
  }
}
