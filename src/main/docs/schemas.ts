import {
  accountSchema,
  loginParamSchema,
  errorSchema,
  surveySchema,
  surveyAnswerSchema,
  surveysSchema,
  signUpParamSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamSchema,
  signUpParams: signUpParamSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  error: errorSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema
}
