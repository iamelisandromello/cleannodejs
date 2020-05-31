import { loginPath, surveyPath, signUpPath } from './paths'
import {
  serverError,
  unauthorized,
  badRequest,
  notFound,
  forbidden
} from './components'

import {
  accountSchema,
  loginParamSchema,
  errorSchema,
  surveySchema,
  surveyAnswerSchema,
  surveysSchema,
  apiKeyAuthSchema,
  signUpParamSchema
} from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node TypeScript',
    description: 'Api Curso de Clen Architecture em TypeScript',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath,
    '/signup': signUpPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamSchema,
    error: errorSchema,
    surveySchema: surveySchema,
    surveysSchema: surveysSchema,
    surveyAnswerSchema: surveyAnswerSchema,
    signUpParamSchema: signUpParamSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }
}
