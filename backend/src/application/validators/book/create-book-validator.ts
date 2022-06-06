import { Validation } from '../../protocols/validation'

export class CreateBookValidator implements Validation {
  validate (input: any): any {
    const { title, description } = input

    const errors: any = []

    if (!title) {
      errors.push('Title is required')
    }

    if (!description) {
      errors.push('Description is required')
    }

    return errors
  }
}
