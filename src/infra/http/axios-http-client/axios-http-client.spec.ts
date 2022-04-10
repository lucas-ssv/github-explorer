import { AxiosHttpClient } from '@/infra/http'
import { mockHttpRequest, mockHttpResponse } from '@/infra/test'
import axios from 'axios'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockHttpRequest()
    const sut = new AxiosHttpClient()
    const mockedAxios = axios as jest.Mocked<typeof axios>
    mockedAxios.request.mockResolvedValue(mockHttpResponse)
    await sut.request(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      params: request.params
    })
  })
})
