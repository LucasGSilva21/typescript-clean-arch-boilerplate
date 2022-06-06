import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'
import { CreateBook } from '../../../domain/usecases/book/create-book'
import { created, serverError } from '../../helpers/http-helper'

export class CreateBookController implements Controller {
  constructor (
    private readonly createBook: CreateBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body, file } = httpRequest
      const book = await this.createBook.create(body, file)
      return created(book)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
