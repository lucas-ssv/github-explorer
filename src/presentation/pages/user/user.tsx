import { RepositoryResult } from '@/domain/models'
import { LoadRepositoryResult } from '@/domain/usecases'
import { Header, RepositoryList, RepositoryResultItem } from '@/presentation/components'
import Styles from './user-styles.scss'
import React, { useEffect, useState } from 'react'

type Props = {
  loadRepositoryResult: LoadRepositoryResult
}

export const User: React.FC<Props> = ({ loadRepositoryResult }: Props) => {
  const [state, setState] = useState<RepositoryResult>()

  useEffect(() => {
    loadRepositoryResult.load().then(response => {
      setState(response)
    })
  }, [])

  return (
    <div className={Styles.userWrap}>
      <Header />
      {state && (
        <main className={Styles.repositoryContent}>
          <div data-testid="repository-info" className={Styles.repositoryInfo}>
            <img
              data-testid="avatar-url"
              src={state.owner.avatar_url}
              alt={state.owner.login}
            />
            <div className={Styles.ownerInfo}>
              <strong data-testid="repository-name">{state.name}</strong>
              <p data-testid="repository-description">{state.description}</p>
            </div>
          </div>
          <div className={Styles.repositoryNumbers}>
            <div className={Styles.number}>
              <strong data-testid="stars-count">{state.stargazers_count}</strong>
              <p>Stars</p>
            </div>
            <div className={Styles.number}>
              <strong data-testid="forks-count">{state.forks_count}</strong>
              <p>Forks</p>
            </div>
            <div className={Styles.number}>
              <strong data-testid="issues-count">{state.open_issues_count}</strong>
              <p>Issues abertas</p>
            </div>
          </div>
          <RepositoryList>
            <RepositoryResultItem repository={state} />
          </RepositoryList>
        </main>
      )}
    </div>
  )
}
