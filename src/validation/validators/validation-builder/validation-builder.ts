import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldValidation } from '@/validation/validators'

export class ValidationBuilder {
  private constructor (
    private readonly field: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.field))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
