import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'
import { FindAllBook } from '../../../domain/usecases/book'
import { ok, serverError } from '../../helpers/http-helper'

export class FindAllBookController implements Controller {
  constructor (
    private readonly findAllBook: FindAllBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const books = await this.findAllBook.findAll()

      return ok(books)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
