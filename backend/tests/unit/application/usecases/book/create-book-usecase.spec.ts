import { CreateBookUseCase } from '../../../../../src/application/usecases/book'
import { CreateBookRepository } from '../../../../application/repositories/book'
import { UploaderHelper } from '../../../../../src/application/protocols/uploader-helper'
import { mockCreateBookRepository } from '../../../../utils/mocks/application'
import { mockUploaderHelper } from '../../../../utils/mocks/application/helpers/mock-uploader-helper'
import { mockCreateBookData } from '../../../../utils/mocks/domain/mock-book'
import { mockFile } from '../../../../utils/mocks/domain/mock-file'
import { throwError } from '../../../../utils/helpers/throw-error'
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

describe('CreateBookUseCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should calls CreateBookRepository with correct values', async () => {
    const { sut, createBookRepository } = makeSut()
    const createSpy = jest.spyOn(createBookRepository, 'create')
    await sut.create(mockCreateBookData())
    expect(createSpy).toHaveBeenCalledWith(mockCreateBookData())
  })

  test('Should calls UploaderHelper with correct value if file field is provided', async () => {
    const { sut, uploaderHelper } = makeSut()
    const uploadSpy = jest.spyOn(uploaderHelper, 'upload')
    await sut.create(mockCreateBookData(), mockFile())
    expect(uploadSpy).toHaveBeenCalledWith(mockFile())
  })

  test('Should throw if UploaderHelper not return a uploaded file', async () => {
    const { sut, uploaderHelper } = makeSut()
    jest.spyOn(uploaderHelper, 'upload').mockImplementationOnce(() => null)
    const promise = sut.create(mockCreateBookData(), mockFile())
    await expect(promise).rejects.toThrow()
  })

  test('Should throw if CreateBookRepository throws', async () => {
    const { sut, createBookRepository } = makeSut()
    jest.spyOn(createBookRepository, 'create').mockImplementationOnce(throwError)
    const promise = sut.create(mockCreateBookData())
    await expect(promise).rejects.toThrow()
  })
})
