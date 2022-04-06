export interface HttpGetClient {
  get: (url: string, options?: Options) => Promise<void>
}

export type Options = {
  params: object
}
