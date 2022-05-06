import { RepositoryResult } from '@/domain/models'
import { LoadRepositoryResult } from '@/domain/usecases'
import { mockRepositoryResult } from '@/data/test'

export class LoadRepositoryResultSpy implements LoadRepositoryResult {
  async load (): Promise<RepositoryResult> {
    return await Promise.resolve(mockRepositoryResult())
  }
}
