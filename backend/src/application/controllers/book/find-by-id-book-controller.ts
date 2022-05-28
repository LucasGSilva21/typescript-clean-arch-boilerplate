import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { FindByIdBook } from '../../../domain/usecases/book'

export class FindByIdBookController implements Controller {
  constructor (
    private readonly findByIdBook: FindByIdBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params
    const book = await this.findByIdBook.findById(id)

    if (!book) {
      return {
        statusCode: 400,
        body: {
          error: 'Book not found'
        }
      }
    }

    return {
      statusCode: 200,
      body: book
    }
  }
}
