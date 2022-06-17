import { validate as validator } from 'class-validator'
import { Validation } from '../../../protocols'
import { CreateBookModel } from '../../models/book-model'

export class CreateBookValidation implements Validation {
  async validate (input: any): Promise<any> {
    const createBook = new CreateBookModel()
    createBook.title = input.title
    createBook.description = input.description
    createBook.author = input.author
    createBook.publicationDate = input.publicationDate
    createBook.imagePath = input.imagePath

    const errors = await validator(createBook)

    if (errors.length > 0) {
      return errors
    }

    return null
  }
}
