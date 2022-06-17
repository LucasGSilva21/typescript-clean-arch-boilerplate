import { FindAllBookUseCase } from '../../../../../src/application/usecases/book'
import { FindAllBookRepository } from '../../../../../src/application/repositories/book'
import { mockFindAllBookRepository } from '../../../../utils/mocks/application/usecases/book'
import { mockBook } from '../../../../utils/mocks/domain/mock-book'
import { throwError } from '../../../../utils/helpers/throw-error'
import MockDate from 'mockdate'

type SutTypes = {
  sut: FindAllBookUseCase
  findAllBookRepositoryStub: FindAllBookRepository
}

const makeSut = (): SutTypes => {
  const findAllBookRepositoryStub = mockFindAllBookRepository()
  const sut = new FindAllBookUseCase(findAllBookRepositoryStub)
  return {
    sut,
    findAllBookRepositoryStub
  }
}

describe('FindAllBookUseCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call FindAllBookRepository', async () => {
    const { sut, findAllBookRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(findAllBookRepositoryStub, 'findAll')
    await sut.findAll()
    expect(loadSpy).toHaveBeenCalled()
  })

  test('Should return a list of books', async () => {
    const { sut } = makeSut()
    const books = await sut.findAll()
    expect(books).toEqual([mockBook(), mockBook()])
  })

  test('Should throw if FindAllBookRepository throws', async () => {
    const { sut, findAllBookRepositoryStub } = makeSut()
    jest.spyOn(findAllBookRepositoryStub, 'findAll').mockImplementationOnce(throwError)
    const promise = sut.findAll()
    await expect(promise).rejects.toThrow()
  })
})
