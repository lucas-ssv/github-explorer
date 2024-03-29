export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  notFound = 404,
  serverError = 500
}

export interface HttpResponse<T = any> {
  statusCode: HttpStatusCode
  body?: T
}
