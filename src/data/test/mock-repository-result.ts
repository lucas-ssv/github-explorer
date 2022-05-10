import { RepositoryResult } from '@/domain/models'
import { faker } from '@faker-js/faker'

export const mockRepositoryResult = (): RepositoryResult => ({
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  full_name: faker.name.findName(),
  description: faker.random.words(),
  html_url: faker.internet.url(),
  forks_count: faker.datatype.number(),
  open_issues_count: faker.datatype.number(),
  stargazers_count: faker.datatype.number(),
  owner: {
    login: faker.name.findName(),
    avatar_url: faker.image.avatar()
  }
})
