import { RemoteLoadRepositoryList } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'
import { Home } from '@/presentation/pages'
import React from 'react'

export const MakeHome: React.FC = () => {
  const url = 'https://api.github.com/search/repositories'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteLoadRepositoryList = new RemoteLoadRepositoryList(url, axiosHttpClient)

  return (
    <Home loadRepositoryList={remoteLoadRepositoryList} />
  )
}
