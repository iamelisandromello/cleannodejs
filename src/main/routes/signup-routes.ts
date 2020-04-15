import { makeSignUpController } from '../factories/controllers/signup/signup-controller-factory'
import { adapterRoute } from '../adapters/express/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adapterRoute(makeSignUpController()))
}
