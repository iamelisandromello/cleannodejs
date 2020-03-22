import { EmailValidatorAdapter } from './email-validator'

describe('Email Validator Adapter', () => {
  test('should return false if validator return fale', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
