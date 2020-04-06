import { makeSignUpController } from '../factories/signup/signup-factory'
import { adapterRoute } from '../adapters/express/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adapterRoute(makeSignUpController()))
}
