import { Validation } from '../../../../../../src/application/protocols'

export const mockCreateBookValidation = (): Validation => {
  class CreateBookValidationStub implements Validation {
    async validate (input: any): Promise<any> {
      return null
    }
  }
  return new CreateBookValidationStub()
}
