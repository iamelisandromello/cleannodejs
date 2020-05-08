import { MongoHelper } from '../helpers/mongo-helper'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { AddSurveyModel } from '@/domain/usecases/add-survey'
import { SurveyModel } from '@/domain/models/surveys'
import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const suerveyCollection = await MongoHelper.getCollection('surveys')
    await suerveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const suerveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = await suerveyCollection.find().toArray()
    return MongoHelper.mapCollection(surveys)
  }

  async loadById (id: string): Promise<SurveyModel> {
    const suerveyCollection = await MongoHelper.getCollection('surveys')
    const survey = await suerveyCollection.findOne({ _id: id })
    return survey && MongoHelper.map(survey)
  }
}
