import { RepositoryListContext } from '@/presentation/contexts'
import Styles from './repository-styles.scss'
import React, { useContext } from 'react'
import { RepositoryItem } from './item/item'
import { RepositoryList } from './list/list'

export const Repository: React.FC = () => {
  const { repositories } = useContext(RepositoryListContext)

  return (
    repositories.length
      ? (
        <RepositoryList>
          <RepositoryItem />
        </RepositoryList>
        )
      : <strong data-testid="message" className={Styles.message}>Nada para mostrar...</strong>
  )
}
