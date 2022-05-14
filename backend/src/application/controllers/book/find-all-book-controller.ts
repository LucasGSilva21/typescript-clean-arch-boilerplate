import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { FindAllBook } from '../../../domain/usecases/book'

export class FindAllBookController implements Controller {
  constructor (
    private readonly findAllBook: FindAllBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const books = await this.findAllBook.findAll()
    return {
      statusCode: 200,
      body: books
    }
  }
}
