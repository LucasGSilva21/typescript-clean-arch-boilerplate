export class Book {
  id: string
  title: string
  description: string
  author?: string
  publicationDate?: Date
  imagePath?: string
}

export type CreateBookData = Omit<Book, 'id'>
