type UploadInfo = {
  headers: any
  onFile: any
  onFinish: any
}

export interface UploaderHelper {
  upload(uploadInfo: UploadInfo): any
}
