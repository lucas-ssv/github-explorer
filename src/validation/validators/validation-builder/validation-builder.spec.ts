import { RequiredFieldValidation, ValidationBuilder } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const sut = ValidationBuilder.field('any_field')
    const validations = sut.required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })
})
