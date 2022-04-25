import { FieldValidationSpy } from '@/validation/test'
import { ValidationComposite } from '@/validation/validators'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: ValidationComposite
}

type Params = {
  error: Error
}

const makeSut = (field: string, params?: Params): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(field),
    new FieldValidationSpy(field)
  ]
  fieldValidationsSpy[0].error = params?.error
  const sut = new ValidationComposite(fieldValidationsSpy)
  return {
    sut
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const field = faker.database.column()
    const errorMessage = faker.random.words()
    const { sut } = makeSut(field, { error: new Error(errorMessage) })
    const error = sut.validate(field, { [faker.database.column()]: faker.random.word() })
    expect(error).toBe(errorMessage)
  })

  test('Should return success if no validation fails', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate(field, { [faker.database.column()]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
