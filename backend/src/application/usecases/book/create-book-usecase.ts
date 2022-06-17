import { Book, CreateBookData } from 'domain/entities/book'
import { CreateBook } from '../../../domain/usecases/book/create-book'
import { CreateBookRepository } from '../../repositories/book'
import { UploaderHelper, Validation } from '../../protocols'
import { File } from '../../../domain/models'
import { InvalidParamsError } from '../../errors'

export class CreateBookUseCase implements CreateBook {
  constructor (
    private readonly createBookRepository: CreateBookRepository,
    private readonly uploaderHelper: UploaderHelper,
    private readonly validation: Validation
  ) {}

  async create (createBookData: CreateBookData, file?: File): Promise<Book> {
    const errors = await this.validation.validate(createBookData)
    if (errors) {
      console.log(JSON.stringify(errors))
      throw new InvalidParamsError(errors)
    }

    if (file) {
      const uploadedFile = await this.uploaderHelper.upload(file)
      if (!uploadedFile) {
        throw new Error()
      }
      createBookData.imagePath = uploadedFile.path
    }

    const book = await this.createBookRepository.create(createBookData)

    return book
  }
}
