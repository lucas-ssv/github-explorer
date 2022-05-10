import { RepositoryList, RepositoryListModel } from '@/domain/models'
import { faker } from '@faker-js/faker'

export const mockRepositoryList = (): RepositoryList => ({
  id: faker.datatype.number(),
  name: faker.random.word(),
  full_name: faker.name.findName(),
  description: faker.random.words(),
  htmlUrl: faker.internet.url(),
  starsCount: faker.datatype.number(),
  forksCount: faker.datatype.number(),
  issuesCount: faker.datatype.number(),
  owner: {
    login: faker.name.firstName(),
    avatar_url: faker.image.imageUrl()
  }
})

export const mockRepositoryListModel = (): RepositoryListModel => ({
  items: [
    mockRepositoryList(),
    mockRepositoryList()
  ]
})
