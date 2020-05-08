import { SaveResultController } from './save-survey-result-controller'
import { HttpRequest, LoadSurveyById, SurveyModel } from './save-survey-recult-controller-protocols'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helper'

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
  test('Should call LoadSurveyById with correct values', async () => {
    const { sut, loadSurverByIdStub } = makeSut()
    const loadById = jest.spyOn(loadSurverByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadById).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should return if LoadSurveyById  returns null', async () => {
    const { sut, loadSurverByIdStub } = makeSut()
    jest.spyOn(loadSurverByIdStub, 'loadById').mockResolvedValueOnce(new Promise(resolve => resolve(null)))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('surveyId')))
  })

  test('Should return 500 if LoadSurveys throws', async () => {
    const { sut, loadSurverByIdStub } = makeSut()
    jest.spyOn(loadSurverByIdStub, 'loadById').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
