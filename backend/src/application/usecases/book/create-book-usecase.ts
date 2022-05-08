import { Book, CreateBookData } from 'domain/entities/book'
import { CreateBook } from '../../../domain/usecases/book/create-book'
import { BookRepository } from '../../protocols/repositories/book-repository'
import { UploaderHelper } from '../../protocols/helpers/uploader-helper'
import { File } from '../../../domain/models'

export class CreateBookUseCase implements CreateBook {
  constructor (
    private readonly bookRepository: BookRepository,
    private readonly uploaderHelper: UploaderHelper
  ) {}

  async create (createBookData: CreateBookData, file?: File): Promise<Book> {
    if (file) {
      const uploadedFile = await this.uploaderHelper.upload(file)
      if (!uploadedFile) {
        throw new Error()
      }
    }
    const book = await this.bookRepository.create(createBookData)
    return book
  }
}