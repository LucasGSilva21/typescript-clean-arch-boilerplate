import { FindAllBookUseCase } from '../../../../../src/application/usecases/book'
import { FindAllRepository } from '../../../../../src/application/protocols/repositories/book'
import { mockFindAllBookRepository } from '../../../../utils/mocks/application/mock-find-all-book-repository'

type SutTypes = {
  sut: FindAllBookUseCase
  findAllRepositoryStub: FindAllRepository
}

const makeSut = (): SutTypes => {
  const findAllRepositoryStub = mockFindAllBookRepository()
  const sut = new FindAllBookUseCase(findAllRepositoryStub)
  return {
    sut,
    findAllRepositoryStub
  }
}

describe('FindAllRepository', () => {
  test('Should call FindAllRepository', async () => {
    const { sut, findAllRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(findAllRepositoryStub, 'findAll')
    await sut.findAll()
    expect(loadSpy).toHaveBeenCalled()
  })
})
