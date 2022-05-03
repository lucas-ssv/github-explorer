import { Header, RepositoryList, RepositoryResultItem } from '@/presentation/components'
import Styles from './user-styles.scss'
import React from 'react'

export const User: React.FC = () => {
  return (
    <div className={Styles.userWrap}>
      <Header />
      <main className={Styles.repositoryContent}>
        <div className={Styles.repositoryInfo}>
          <img
            src="https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
            alt="Imagem de perfil do usuário do Github"
          />
          <div className={Styles.ownerInfo}>
            <strong>tiagoluchtenberg/repo</strong>
            <p>Descrição do repo</p>
          </div>
        </div>
        <div className={Styles.repositoryNumbers}>
          <div className={Styles.number}>
            <strong>1808</strong>
            <p>Stars</p>
          </div>
          <div className={Styles.number}>
            <strong>48</strong>
            <p>Forks</p>
          </div>
          <div className={Styles.number}>
            <strong>67</strong>
            <p>Issues abertas</p>
          </div>
        </div>
        <RepositoryList>
          <RepositoryResultItem />
        </RepositoryList>
      </main>
    </div>
  )
}
