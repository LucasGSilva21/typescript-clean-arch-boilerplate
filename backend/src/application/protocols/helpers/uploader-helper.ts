import { File, UploadedFile } from '../../../domain/models'

export interface UploaderHelper {
  upload(file: File): Promise<UploadedFile>
}
