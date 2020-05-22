import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'
import { makeloadSurveyResultController } from '@/main/factories/controllers/survey-result/load-survey-result/load-survey-result-controller-factory'
import { adapterRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adapterRoute(makeSaveSurveyResultController()))
  router.get('/surveys/:surveyId/results', auth, adapterRoute(makeloadSurveyResultController()))
}
