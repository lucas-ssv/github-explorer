import { RepositoryResultModel } from '@/domain/models'
import { faker } from '@faker-js/faker'

export const mockRepositoryResult = (): RepositoryResultModel => ({
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  fullName: faker.name.findName(),
  description: faker.random.words(),
  forksCount: faker.datatype.number(),
  issuesCount: faker.datatype.number(),
  starsCount: faker.datatype.number(),
  owner: {
    name: faker.name.findName()
  }
})
