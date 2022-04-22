import { RequiredFieldValidation } from '@/validation/validators'
import { RequiredFieldError } from '@/validation/errors'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
