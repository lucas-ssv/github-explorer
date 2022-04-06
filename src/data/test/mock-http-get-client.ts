import { HttpGetClient, HttpResponse, HttpStatusCode, Options } from '@/data/protocols/http'

export class HttpGetClientSpy implements HttpGetClient {
  url: string
  options: Options
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async get (url: string, options?: Options): Promise<HttpResponse> {
    this.url = url
    this.options = options
    return await Promise.resolve(this.response)
  }
}
