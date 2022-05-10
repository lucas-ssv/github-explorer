import { User } from '@/presentation/pages'
import { makeRemoteLoadRepositoryResult } from '@/main/factories/usecases'
import { useParams } from 'react-router-dom'
import React from 'react'

export const MakeUser: React.FC = () => {
  const { owner, repo } = useParams()

  return (
    <User loadRepositoryResult={makeRemoteLoadRepositoryResult({ owner, repo })} />
  )
}
