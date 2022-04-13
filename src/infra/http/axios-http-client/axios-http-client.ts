import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    const axiosResponse = await axios.request({
      url: data.url,
      method: data.method,
      params: data.params
    })
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
