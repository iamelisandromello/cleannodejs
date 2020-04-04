import { RequireFieldValidation } from './require-field-validation'
import { MissingParamError } from '../../errors'

describe('Require Field Validation', () => {
  test('Should return a MissingParamError fails', () => {
    const sut = new RequireFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation fails successeds', () => {
    const sut = new RequireFieldValidation('field')
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
