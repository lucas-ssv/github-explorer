import Styles from './list-styles.scss'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const RepositoryList: React.FC<Props> = ({ children }: Props) => {
  return (
    <div data-testid="repositories-wrap" className={Styles.repositoriesWrap}>
      {children}
    </div>
  )
}
