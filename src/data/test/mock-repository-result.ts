import { RepositoryResult } from '@/domain/models'
import { faker } from '@faker-js/faker'

export const mockRepositoryResult = (): RepositoryResult => ({
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  fullName: faker.name.findName(),
  description: faker.random.words(),
  forksCount: faker.datatype.number(),
  issuesCount: faker.datatype.number(),
  starsCount: faker.datatype.number(),
  owner: {
    name: faker.name.findName(),
    avatar_url: faker.image.avatar()
  }
})
