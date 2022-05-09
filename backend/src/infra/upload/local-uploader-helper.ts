import { UploaderHelper } from '../../application/protocols/helpers/uploader-helper'
import { File, UploadedFile } from '../../domain/models'

export class LocalUploaderHelper implements UploaderHelper {
  async upload (file: File): Promise<UploadedFile> {
    return Promise.resolve({
      path: 'valid_path'
    })
  }
}
