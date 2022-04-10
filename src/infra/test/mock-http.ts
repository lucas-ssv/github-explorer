import { HttpRequest } from '@/data/protocols/http'
import { AxiosResponse } from 'axios'

export const mockHttpRequest = (): HttpRequest => ({
  url: 'any_url',
  method: 'GET',
  params: {
    q: 'any_params'
  }
})

export const mockHttpResponse = (): Omit<AxiosResponse, 'config' | 'headers' | 'statusText'> => ({
  data: 'any_data',
  status: 200
})
