import { Book, CreateBookData } from 'domain/entities/book'
import { CreateBook } from '../../../domain/usecases/book/create-book'
import { CreateBookRepository } from '../../protocols/repositories/book'
import { UploaderHelper } from '../../protocols/helpers/uploader-helper'
import { File } from '../../../domain/models'

export class CreateBookUseCase implements CreateBook {
  constructor (
    private readonly createBookRepository: CreateBookRepository,
    private readonly uploaderHelper: UploaderHelper
  ) {}

  async create (createBookData: CreateBookData, file?: File): Promise<Book> {
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
