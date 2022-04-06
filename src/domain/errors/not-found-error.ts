export class NotFoundError extends Error {
  constructor () {
    super('O servidor não pode encontrar o recurso solicitado')
    this.name = 'NotFoundError'
  }
}
