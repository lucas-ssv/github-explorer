import { AxiosHttpClient } from '@/infra/http'
import { HttpMethod } from '@/data/protocols/http'
import { mockAxios } from '@/infra/test'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = {
      url: 'any_url',
      method: 'GET' as HttpMethod,
      params: { q: 'any_param' }
    }
    const mockedAxios = mockAxios()
    const sut = new AxiosHttpClient()
    await sut.request(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      params: request.params
    })
  })
})
