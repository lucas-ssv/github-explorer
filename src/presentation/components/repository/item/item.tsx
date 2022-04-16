import Styles from './item-styles.scss'
import React from 'react'

export const RepositoryItem: React.FC = () => {
  return (
    <a href="#" className={Styles.repositoryLink}>
      <div className={Styles.repository}>
        <img
          src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80"
          alt="Image profile"
        />
        <div className={Styles.profileInfo}>
          <strong>tiagoluchtenberg/repo</strong>
          <p>Descrição do repo</p>
        </div>
      </div>
    </a>
  )
}
