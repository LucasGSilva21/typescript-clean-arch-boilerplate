import { FindAllBookUseCase } from '../../../../../src/application/usecases/book'
import { FindAllBookRepository } from '../../../../../src/application/protocols/repositories/book'
import { mockFindAllBookRepository } from '../../../../utils/mocks/application/mock-find-all-book-repository'

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
  test('Should call FindAllBookRepository', async () => {
    const { sut, findAllBookRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(findAllBookRepositoryStub, 'findAll')
    await sut.findAll()
    expect(loadSpy).toHaveBeenCalled()
  })
})
