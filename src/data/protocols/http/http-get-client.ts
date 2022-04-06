import { HttpResponse } from '@/data/protocols/http'

export interface HttpGetClient {
  get: (url: string, options?: Options) => Promise<HttpResponse>
}

export type Options = {
  params: object
}
