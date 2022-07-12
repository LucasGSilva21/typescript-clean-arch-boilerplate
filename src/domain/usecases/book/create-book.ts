import { Book, BookData } from '../../entities/book'
import { File } from '../../models'

export interface CreateBook {
  create (bookData: BookData, file?: File): Promise<Book>
}
