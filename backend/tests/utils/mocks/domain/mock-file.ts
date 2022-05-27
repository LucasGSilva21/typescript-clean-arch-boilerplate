import { File } from '../../../../src/domain/models'

export const mockFile = (): File => {
  return {
    fieldname: 'valid_fieldname',
    originalname: 'valid_originalname',
    encoding: 'valid_encoding',
    mimetype: 'valid_mimetype',
    buffer: new ArrayBuffer(1),
    size: 1
  }
}
