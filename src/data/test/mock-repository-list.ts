import { RepositoryListModel } from '@/domain/models'

export const mockRepositoryList = (): RepositoryListModel => ({
  repositories: [{
    id: 1,
    name: 'any_name',
    fullName: 'any_full_name',
    description: 'any_description',
    htmlUrl: 'any_html_url',
    starsCount: 10,
    forksCount: 5,
    issuesCount: 2,
    owner: {
      name: 'any_owner_name'
    }
  }]
})
