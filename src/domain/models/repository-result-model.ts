export interface RepositoryResultModel {
  name: string
  fullName: string
  description: string
  starsCount: number
  forksCount: number
  issuesCount: number
  owner: {
    name: string
  }
}
