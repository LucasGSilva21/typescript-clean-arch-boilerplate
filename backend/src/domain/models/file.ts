export interface File {
  fieldname: string
  originalname: string;
  encoding: string
  mimetype: string;
  buffer: ArrayBuffer;
  size: number;
}
