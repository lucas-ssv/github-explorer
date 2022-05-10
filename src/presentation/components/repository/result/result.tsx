import Styles from './result-styles.scss'
import React from 'react'
import { RepositoryResult } from '@/domain/models'

type Props = {
  repository: RepositoryResult
}

export const RepositoryResultItem: React.FC<Props> = ({ repository }: Props) => {
  return (
    <a data-testid="html-url" href={repository.html_url} className={Styles.repositoryResult} target="_blank">
      <div className={Styles.info}>
        <strong data-testid="repository-full-name">{repository.full_name}</strong>
        <p data-testid="repository-description-result">{repository.description}</p>
      </div>
    </a>
  )
}
