import { File, UploadedFile } from '../../../../../src/domain/models'
import { UploaderHelper } from '../../../../../src/application/protocols/helpers/uploader-helper'

export const mockUploaderHelper = (): UploaderHelper => {
  class UploaderHelperStub implements UploaderHelper {
    async upload (file: File): Promise<UploadedFile> {
      return { path: 'valid_path' }
    }
  }

  return new UploaderHelperStub()
}
