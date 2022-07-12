import { Book, BookData } from '../../../domain/entities/book'
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

  async create (bookData: BookData, file?: File): Promise<Book> {
    const errors = await this.validation.validate(bookData)
    if (errors) {
      throw new InvalidParamsError(errors)
    }

    const createBook = new Book(bookData)

    if (file) {
      const uploadedFile = await this.uploaderHelper.upload(file)
      if (!uploadedFile) {
        throw new Error()
      }
      createBook.changeImagePath(uploadedFile.path)
    }

    const book = await this.createBookRepository.create({
      title: createBook.title,
      description: createBook.description,
      author: createBook.author,
      publicationDate: createBook.publicationDate,
      imagePath: createBook.imagePath
    })

    return book
  }
}
