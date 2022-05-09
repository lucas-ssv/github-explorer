import Styles from './result-styles.scss'
import React from 'react'
import { RepositoryResult } from '@/domain/models'
import { Link } from 'react-router-dom'

type Props = {
  repository: RepositoryResult
}

export const RepositoryResultItem: React.FC<Props> = ({ repository }: Props) => {
  return (
    <Link to={repository.htmlUrl}>
      <div className={Styles.repositoryResult}>
        <div className={Styles.info}>
          <strong data-testid="repository-full-name">{repository.fullName}</strong>
          <p data-testid="repository-description-result">{repository.description}</p>
        </div>
      </div>
    </Link>
  )
}
