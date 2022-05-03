import Styles from './result-styles.scss'
import React from 'react'

export const RepositoryResultItem: React.FC = () => {
  return (
    <div className={Styles.repositoryResult}>
      <div className={Styles.info}>
        <strong data-testid="full-name">gostack-desafio-conceitos-react-native</strong>
        <p data-testid="description">Diego Fernandes</p>
      </div>
    </div>
  )
}
