import { HttpRequest } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async request (data: HttpRequest): Promise<void> {
    await axios.request({
      url: data.url,
      params: data.params,
      method: data.method
    })
  }
}
