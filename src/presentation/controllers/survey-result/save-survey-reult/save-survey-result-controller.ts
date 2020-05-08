import { Controller, HttpRequest, HttpResponse, LoadSurveyById } from './save-survey-recult-controller-protocols'

export class SaveResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return null
  }
}
