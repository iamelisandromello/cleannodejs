import { adapterMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '@/main/factories/middlewares/auth-middleware'

export const auth = adapterMiddleware(makeAuthMiddleware())
