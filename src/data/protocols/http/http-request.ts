export interface HttpRequest {
  url: string
  method: HttpMethod
  params?: object
}

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'
