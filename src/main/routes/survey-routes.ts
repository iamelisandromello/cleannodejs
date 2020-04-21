import { Router } from 'express'
import { adapterRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware'
import { adapterMiddleware } from '../adapters/express-middleware-adapter'

export default (router: Router): void => {
  const adminAuth = adapterMiddleware(makeAuthMiddleware())
  router.post('/surveys', adminAuth, adapterRoute(makeAddSurveyController()))
}
