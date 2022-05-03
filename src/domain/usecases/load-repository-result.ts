import { RepositoryResult } from '@/domain/models'

export interface LoadRepositoryResult {
  load: () => Promise<RepositoryResult>
}
