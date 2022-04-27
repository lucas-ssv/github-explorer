import { makeRemoteLoadRepositoryList } from '@/main/factories/usecases'
import { Home } from '@/presentation/pages'
import React from 'react'

export const MakeHome: React.FC = () => {
  return (
    <Home loadRepositoryList={makeRemoteLoadRepositoryList()} />
  )
}
