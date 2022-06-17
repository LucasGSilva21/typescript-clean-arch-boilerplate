import fs from 'fs'
import { join } from 'path'
import { Buffer } from 'buffer'
import { UploaderHelper } from '../../application/protocols/uploader-helper'
import { File, UploadedFile } from '../../domain/models'

export class LocalUploaderHelper implements UploaderHelper {
  async upload (file: File): Promise<UploadedFile> {
    const path = join(__dirname, '../../../images/')

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
    }

    const pathFile = path + `${Date.now() + file.originalname}`

    fs.writeFileSync(pathFile, Buffer.from(file.buffer))

    return Promise.resolve({ path: pathFile })
  }
}
