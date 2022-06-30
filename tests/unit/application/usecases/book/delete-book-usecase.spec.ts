import { DeleteBookUseCase } from '../../../../../src/application/usecases/book'
import { DeleteBookRepository, FindByIdBookRepository } from '../../../../../src/application/repositories/book'
import { mockFindByIdBookRepository, mockDeleteBookRepository } from '../../../../utils/mocks/application/usecases/book'
import { throwError } from '../../../../utils/helpers/throw-error'

type SutTypes = {
  sut: DeleteBookUseCase
  deleteBookRepository: DeleteBookRepository
  findByIdBookRepository: FindByIdBookRepository
}

const makeSut = (): SutTypes => {
  const deleteBookRepository = mockDeleteBookRepository()
  const findByIdBookRepository = mockFindByIdBookRepository()
  const sut = new DeleteBookUseCase(deleteBookRepository, findByIdBookRepository)
  return {
    sut,
    deleteBookRepository,
    findByIdBookRepository
  }
}

describe('DeleteBookUseCase', () => {
  test('Should call FindByIdBookRepository with correct values', async () => {
    const { sut, findByIdBookRepository } = makeSut()
    const deleteSpy = jest.spyOn(findByIdBookRepository, 'findById')
    await sut.delete('any_id')
    expect(deleteSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should call DeleteBookRepository with correct values', async () => {
    const { sut, deleteBookRepository } = makeSut()
    const deleteSpy = jest.spyOn(deleteBookRepository, 'delete')
    await sut.delete('any_id')
    expect(deleteSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if FindByIdBookRepository throws', async () => {
    const { sut, findByIdBookRepository } = makeSut()
    jest.spyOn(findByIdBookRepository, 'findById').mockImplementationOnce(throwError)
    const promise = sut.delete('valid_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should return false if FindByIdBookRepository not found a book', async () => {
    const { sut, findByIdBookRepository } = makeSut()
    jest.spyOn(findByIdBookRepository, 'findById').mockImplementationOnce(() => null)
    const result = await sut.delete('valid_id')
    expect(result).toBeFalsy()
  })

  test('Should throw if DeleteBookRepository throws', async () => {
    const { sut, deleteBookRepository } = makeSut()
    jest.spyOn(deleteBookRepository, 'delete').mockImplementationOnce(throwError)
    const promise = sut.delete('valid_id')
    await expect(promise).rejects.toThrow()
  })
})
