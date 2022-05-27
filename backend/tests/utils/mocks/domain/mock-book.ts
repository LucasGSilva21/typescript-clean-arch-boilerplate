import { Book, CreateBookData } from '../../../../src/domain/entities/book'

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

export const mockCreateBookData = (): CreateBookData => {
  return {
    title: 'book-title',
    description: 'book-description',
    author: 'book-author',
    publicationDate: new Date()
  }
}
