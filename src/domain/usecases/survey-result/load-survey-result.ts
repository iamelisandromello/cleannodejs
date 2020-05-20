import { SurveyResultModel } from '@/domain/models/surveys-result'


export interface LoadSurveyResult {
  laod: (data: string) => Promise<SurveyResultModel>
}
