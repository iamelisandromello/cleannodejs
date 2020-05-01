import { adapterMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '@/main/factories/middlewares/auth-middleware'

export const adminAuth = adapterMiddleware(makeAuthMiddleware('admin'))
