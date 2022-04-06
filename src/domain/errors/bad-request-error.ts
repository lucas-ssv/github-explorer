export class BadRequestError extends Error {
  constructor () {
    super('Ocorreu um erro na requisição. Tente novamente mais tarde')
    this.name = 'BadRequestError'
  }
}
