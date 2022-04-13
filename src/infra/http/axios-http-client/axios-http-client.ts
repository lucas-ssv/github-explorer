import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        params: data.params
      })
    } catch (error) {
      axiosResponse = error
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
