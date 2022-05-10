export interface RepositoryListModel {
  items: RepositoryList[]
}

export interface RepositoryList {
  id: number
  name: string
  full_name: string
  description: string
  htmlUrl: string
  starsCount: number
  forksCount: number
  issuesCount: number
  owner: {
    login: string
    avatar_url: string
  }
}
