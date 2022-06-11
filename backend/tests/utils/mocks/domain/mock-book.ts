import { Book, CreateBookData } from '../../../../src/domain/entities/book'

export const mockBook = (): Book => {
  return {
    id: 'book-id',
    title: 'book-title',
    description: 'book-description',
    author: 'book-author',
    publicationDate: new Date(),
    imagePath: 'book-image-path'
  }
}

export const mockCreateBookData = (): CreateBookData => {
  return {
    title: 'book-title',
    description: 'book-description',
    author: 'book-author',
    publicationDate: new Date()
  }
}
