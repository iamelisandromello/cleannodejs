import { AddAccount, AddAccountParams } from '@/domain/usecases/account/add-accounts'
import { AuthenticationParams, Authentication } from '@/domain/usecases/account/authentication'
import { AccountModel } from '@/domain/models/account'
import { mockAccountModel } from '@/domain/test'
import { LoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AutehnticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<string> {
      return Promise.resolve('any_token')
    }
  }
  return new AutehnticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenStub()
}
