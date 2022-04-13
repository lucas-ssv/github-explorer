import axios, { AxiosResponse } from 'axios'

export const mockHttpResponse = (): Omit<AxiosResponse, 'headers' | 'config' | 'statusText'> => ({
  status: 200,
  data: 'any_data'
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse)
  return mockedAxios
}
