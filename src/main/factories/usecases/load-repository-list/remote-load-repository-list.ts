import { LoadRepositoryList } from '@/domain/usecases'
import { RemoteLoadRepositoryList } from '@/data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadRepositoryList = (): LoadRepositoryList => {
  const url = makeApiUrl()
  return new RemoteLoadRepositoryList(`${url}/search/repositories`, makeAxiosHttpClient())
}
