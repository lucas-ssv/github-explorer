import { RequiredFieldValidation, ValidationBuilder } from '@/validation/validators'
import { faker } from '@faker-js/faker'

const makeSut = (field: string): ValidationBuilder => ValidationBuilder.field(field)

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const validations = sut.required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })
})
