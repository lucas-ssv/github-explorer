export class RequiredFieldError extends Error {
  constructor () {
    super('Este campo é obrigatório!')
    this.name = 'RequiredFieldError'
  }
}
