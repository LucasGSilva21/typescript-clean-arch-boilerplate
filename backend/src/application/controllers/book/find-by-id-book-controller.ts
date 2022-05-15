import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { FindByIdBook } from '../../../domain/usecases/book'

export class FindByIdBookController implements Controller {
  constructor (
    private readonly findByIdBook: FindByIdBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.body
    const book = await this.findByIdBook.findById(id)
    return {
      statusCode: 200,
      body: book
    }
  }
}
