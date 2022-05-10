import { RepositoryList } from '@/domain/models'
import Styles from './item-styles.scss'
import { Link } from 'react-router-dom'
import React from 'react'

type Props = {
  repository: RepositoryList
}

export const RepositoryItem: React.FC<Props> = ({ repository }: Props) => {
  return (
    <Link data-testid="repository-item" to={`/${repository.owner.login}/${repository.name}`} className={Styles.repositoryLink}>
      <div className={Styles.repository}>
        <img
          data-testid="image-profile"
          src={repository.owner.avatar_url}
          alt={repository.owner.login}
        />
        <div className={Styles.profileInfo}>
          <strong data-testid="full-name">{repository.full_name}</strong>
          <p data-testid="description">{repository.description}</p>
        </div>
      </div>
    </Link>
  )
}
