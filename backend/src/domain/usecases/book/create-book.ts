import { Book, CreateBookData } from '../../entities/book'
import { File } from '../../models'

export interface CreateBook {
  create (createBookData: CreateBookData, file?: File): Promise<Book>
}
