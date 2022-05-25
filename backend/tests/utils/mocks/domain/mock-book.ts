import { Book } from '../../../../src/domain/entities/book'

export const mockBook = (): Book => {
  const book = new Book()

  book.id = 'book-id'
  book.title = 'book-title'
  book.description = 'book-description'
  book.author = 'book-author'
  book.publicationDate = new Date()
  book.imagePath = 'book-image-path'

  return book
}
