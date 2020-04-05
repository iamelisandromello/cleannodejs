import { AuthenticationModel, Authentication } from '../../../domain/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'
import { HashComparer } from '../../../data/protocols/criptography/hash-comparer'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComaprer: HashComparer

  constructor (loadAccountByEmailRepository: LoadAccountByEmailRepository, hashComparer: HashComparer) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComaprer = hashComparer
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      await this.hashComaprer.compare(authentication.password, account.password)
    }
    return null
  }
}
