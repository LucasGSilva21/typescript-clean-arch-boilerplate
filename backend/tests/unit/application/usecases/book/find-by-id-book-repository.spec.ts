import { FindByIdBookUseCase } from '../../../../../src/application/usecases/book'
import { FindByIdBookRepository } from '../../../../../src/application/protocols/repositories/book'
import { mockFindByIdBookRepository } from '../../../../utils/mocks/application'

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
})