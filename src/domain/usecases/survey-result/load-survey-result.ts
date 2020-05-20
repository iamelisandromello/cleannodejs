import { SurveyResultModel } from '@/domain/models/surveys-result'

export interface LoadSurveyResult {
  load: (data: string) => Promise<SurveyResultModel>
}
