import faker from '@faker-js/faker'
import axios, { AxiosResponse } from 'axios'

export const mockHttpResponse = (): Omit<AxiosResponse, 'headers' | 'config' | 'statusText'> => ({
  status: faker.datatype.number(),
  data: faker.random.arrayElements()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse())
  return mockedAxios
}
