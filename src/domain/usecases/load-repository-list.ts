import { RepositoryListModel } from '../models'

export interface LoadRepositoryList {
  load: (repository: string) => Promise<RepositoryListModel>
}
