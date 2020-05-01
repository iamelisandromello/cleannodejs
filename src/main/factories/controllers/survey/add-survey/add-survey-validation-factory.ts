import { Validation } from '@/presentation/protocols/validation'
import { ValidationComposite, RequireFieldValidation } from '@/validation/validators'

export const makeAddSurveyValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['question', 'answers']) {
    validations.push(new RequireFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
