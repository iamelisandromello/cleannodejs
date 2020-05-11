
import { AddAccountParams } from '@/domain/usecases/account/add-accounts'
import { AccountModel } from '@/domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountParams): Promise<AccountModel>
}
