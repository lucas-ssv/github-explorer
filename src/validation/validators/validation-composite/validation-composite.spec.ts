import { FieldValidationSpy } from '@/validation/test'
import { ValidationComposite } from '@/validation/validators'

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldValidationsSpy = [
      new FieldValidationSpy('any_field'),
      new FieldValidationSpy('other_field')
    ]
    fieldValidationsSpy[0].error = new Error('any_error')
    const sut = new ValidationComposite(fieldValidationsSpy)
    const error = sut.validate('any_field', { any_field: 'any_value' })
    expect(error).toBe('any_error')
  })

  test('Should return success if no validation fails', () => {
    const fieldValidationsSpy = [
      new FieldValidationSpy('any_field'),
      new FieldValidationSpy('other_field')
    ]
    const sut = new ValidationComposite(fieldValidationsSpy)
    const error = sut.validate('any_field', { any_field: 'any_value' })
    expect(error).toBeFalsy()
  })
})
