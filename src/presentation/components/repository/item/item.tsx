import { RepositoryList } from '@/domain/models'
import Styles from './item-styles.scss'
import React from 'react'

type Props = {
  repository: RepositoryList
}

export const RepositoryItem: React.FC<Props> = ({ repository }: Props) => {
  return (
    <a data-testid="repository-item" href="#" className={Styles.repositoryLink}>
      <div className={Styles.repository}>
        <img
          data-testid="image-profile"
          src={repository.owner.avatar_url}
          alt={repository.owner.name}
        />
        <div className={Styles.profileInfo}>
          <strong data-testid="full-name">{repository.fullName}</strong>
          <p data-testid="description">{repository.description}</p>
        </div>
      </div>
    </a>
  )
}
