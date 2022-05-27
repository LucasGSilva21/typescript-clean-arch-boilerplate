import { CreateBookUseCase } from '../../../../../src/application/usecases/book'
import { CreateBookRepository } from '../../../../../src/application/protocols/repositories/book'
import { UploaderHelper } from '../../../../../src/application/protocols/helpers/uploader-helper'
import { mockCreateBookRepository } from '../../../../utils/mocks/application'
import { mockUploaderHelper } from '../../../../utils/mocks/application/helpers/mock-uploader-helper'
import { mockCreateBookData } from '../../../../utils/mocks/domain/mock-book'
import MockDate from 'mockdate'

type SutTypes = {
  sut: CreateBookUseCase
  createBookRepository: CreateBookRepository
  uploaderHelper: UploaderHelper
}

const makeSut = (): SutTypes => {
  const createBookRepository = mockCreateBookRepository()
  const uploaderHelper = mockUploaderHelper()
  const sut = new CreateBookUseCase(createBookRepository, uploaderHelper)
  return {
    sut,
    createBookRepository,
    uploaderHelper
  }
}

describe('FindByIdBookUseCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should calls CreateBookRepository with correct values', async () => {
    const { sut, createBookRepository } = makeSut()
    const loadSpy = jest.spyOn(createBookRepository, 'create')
    await sut.create(mockCreateBookData())
    expect(loadSpy).toHaveBeenCalled()
  })
})
