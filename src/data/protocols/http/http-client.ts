import { HttpRequest, HttpResponse } from '@/data/protocols/http'

export interface HttpClient {
  request: (data: HttpRequest) => Promise<HttpResponse>
}
