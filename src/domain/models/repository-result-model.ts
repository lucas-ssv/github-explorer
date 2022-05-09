export interface RepositoryResult {
  id: number
  name: string
  fullName: string
  description: string
  htmlUrl: string
  starsCount: number
  forksCount: number
  issuesCount: number
  owner: {
    name: string
    avatar_url: string
  }
}
