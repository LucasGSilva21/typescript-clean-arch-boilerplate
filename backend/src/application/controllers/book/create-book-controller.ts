import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { CreateBook } from '../../../domain/usecases/book/create-book'

export class CreateBookController implements Controller {
  constructor (
    private readonly createBook: CreateBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body, file } = httpRequest
    const book = await this.createBook.create(body, file)
    return {
      statusCode: 201,
      body: book
    }
  }
}
