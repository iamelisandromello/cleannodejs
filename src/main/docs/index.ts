import { loginPath } from './paths/login-paths'
import { accountSchema } from './schemas/account-schema'
import { loginParamSchema } from './schemas/login-params-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node TypeScript',
    description: 'Api Curso de Clen Architecture em TypeScript',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamSchema
  }
}
