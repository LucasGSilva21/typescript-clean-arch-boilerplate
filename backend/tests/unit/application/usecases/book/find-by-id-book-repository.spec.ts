import { FindByIdBookUseCase } from '../../../../../src/application/usecases/book'
import { FindByIdBookRepository } from '../../../../../src/application/protocols/repositories/book'
import { mockFindByIdBookRepository } from '../../../../utils/mocks/application'
import { mockBook } from '../../../../utils/mocks/domain/mock-book'
import { throwError } from '../../../../utils/helpers/throw-error'

type SutTypes = {
  sut: FindByIdBookUseCase
  findByIdBookRepository: FindByIdBookRepository
}

const makeSut = (): SutTypes => {
  const findByIdBookRepository = mockFindByIdBookRepository()
  const sut = new FindByIdBookUseCase(findByIdBookRepository)
  return {
    sut,
    findByIdBookRepository
  }
}

describe('FindByIdBookUseCase', () => {
  test('Should call FindByIdBookRepository', async () => {
    const { sut, findByIdBookRepository } = makeSut()
    const loadSpy = jest.spyOn(findByIdBookRepository, 'findById')
    await sut.findById('any_id')
    expect(loadSpy).toHaveBeenCalled()
  })

  test('Should return a book on success', async () => {
    const { sut } = makeSut()
    const books = await sut.findById('valid_id')
    expect(books).toEqual(mockBook())
  })

  test('Should throw if FindByIdBookRepository throws', async () => {
    const { sut, findByIdBookRepository } = makeSut()
    jest.spyOn(findByIdBookRepository, 'findById').mockImplementationOnce(throwError)
    const promise = sut.findById('valid_id')
    await expect(promise).rejects.toThrow()
  })
})
