import { RepositoryResultModel } from '@/domain/models'

export interface LoadRepositoryResult {
  load: () => Promise<RepositoryResultModel>
}
