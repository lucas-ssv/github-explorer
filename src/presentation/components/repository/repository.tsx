import { RepositoryList } from '@/domain/models'
import { RepositoryListContext } from '@/presentation/contexts'
import { RepositoryList as List } from './list/list'
import { RepositoryItem } from './item/item'
import Styles from './repository-styles.scss'
import React, { useContext } from 'react'

export const Repository: React.FC = () => {
  const { repositories } = useContext(RepositoryListContext)

  return (
    repositories.length
      ? (
        <List>
          {repositories.map((repository: RepositoryList) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </List>
        )
      : <strong data-testid="message" className={Styles.message}>Nada para mostrar...</strong>
  )
}
