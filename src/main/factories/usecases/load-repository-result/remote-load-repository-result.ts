import { RemoteLoadRepositoryResult } from '@/data/usecases'
import { LoadRepositoryResult } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

type Params = {
  owner: string
  repo: string
}

export const makeRemoteLoadRepositoryResult = ({ owner, repo }: Params): LoadRepositoryResult => {
  const url = makeApiUrl()
  return new RemoteLoadRepositoryResult(`${url}/repos/${owner}/${repo}`, makeAxiosHttpClient())
}
