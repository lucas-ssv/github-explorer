import { RepositoryListModel } from '@/domain/models'

export interface LoadRepositoryList {
  load: (repository: string) => Promise<RepositoryListModel>
}
