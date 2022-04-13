import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpClientSpy implements HttpClient {
  url: string
  params: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async request (data: HttpRequest): Promise<HttpResponse> {
    this.url = data.url
    this.params = data.params
    return await Promise.resolve(this.response)
  }
}
