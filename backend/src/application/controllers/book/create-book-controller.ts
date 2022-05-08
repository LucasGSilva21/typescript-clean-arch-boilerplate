import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { CreateBook } from '../../../domain/usecases/book/create-book'

export class CreateBookController implements Controller {
  constructor (
    private readonly createBook: CreateBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { files } = httpRequest.body
    const book = await this.createBook.create(httpRequest.body, files)
    return {
      statusCode: 200,
      body: book
    }
  }
}
