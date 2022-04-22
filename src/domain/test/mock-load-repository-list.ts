import { LoadRepositoryList } from '@/domain/usecases'
import { RepositoryListModel } from '@/domain/models'
import { mockRepositoryList } from '@/data/test'

export class LoadRepositoryListSpy implements LoadRepositoryList {
  callsCount = 0

  async load (repository: string): Promise<RepositoryListModel> {
    this.callsCount++
    return await Promise.resolve(mockRepositoryList())
  }
}
