import { LoadSurveyById } from '@/domain/usecases/load-survey-by-id'
import { SurveyModel } from '@/domain/models/surveys'
import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loaddSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadById (id: string): Promise<SurveyModel> {
    const survey = await this.loaddSurveyByIdRepository.loadById(id)
    return survey
  }
}
