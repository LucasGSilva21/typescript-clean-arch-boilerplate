import { Book, BookData } from '../../../../src/domain/entities/book'

export const mockBook = (): Book => {
  return new Book({
    id: 'book-id',
    title: 'book-title',
    description: 'book-description',
    author: 'book-author',
    publicationDate: new Date(),
    imagePath: 'book-image-path'
  })
}

export const mockCreateBookData = (): BookData => {
  return {
    title: 'book-title',
    description: 'book-description',
    author: 'book-author',
    publicationDate: new Date()
  }
}
