export class ServerError extends Error {
  constructor () {
    super('O servidor encontrou uma situação com a qual não sabe lidar')
    this.name = 'ServerError'
  }
}
