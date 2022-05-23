export interface DeleteBook {
  delete (id: string): Promise<void>
}
