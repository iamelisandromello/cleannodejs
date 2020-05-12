import { LogErrorRepository } from '../protocols/db/log/log-error-repository'

export const mockLogErrorRepository = (): LogErrorRepository => {
  class LogErrorRepsoitoryStub implements LogErrorRepository {
    async logError (stack: string): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new LogErrorRepsoitoryStub()
}
