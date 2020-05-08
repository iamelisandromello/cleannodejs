import { SaveResultController } from './save-survey-result-controller'
import { HttpRequest, LoadSurveyById, SurveyModel } from './save-survey-recult-controller-protocols'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_survey_id'
  }
})

const makeFakeSurvey = (): SurveyModel => ({
  id: 'any_id',
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
})

const makeLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return new Promise(resolve => resolve(makeFakeSurvey()))
    }
  }
  return new LoadSurveyByIdStub()
}

type SutTypes = {
  sut: SaveResultController
  loadSurverByIdStub: LoadSurveyById
}

const makeSut = (): SutTypes => {
  const loadSurverByIdStub = makeLoadSurveyById()
  const sut = new SaveResultController(loadSurverByIdStub)
  return {
    sut,
    loadSurverByIdStub
  }
}

describe('SaveSurveyResult Controller', () => {
  test('Should call LoadSurveyById with crrect values', async () => {
    const { sut, loadSurverByIdStub } = makeSut()
    const loadById = jest.spyOn(loadSurverByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadById).toHaveBeenCalledWith('any_survey_id')
  })
})
