import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '@/domain/models/surveys-result'

export interface SaveSurveyResultRepository {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
