import * as api from '../constant'

let cookiesData = Cookies.get('access_token')

export function getSurveyData () {
  return axios.get(api.SURVEY_GET_FORM_URL, generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function submitSurveyData (request) {
  return axios.post(api.SURVEY_POST_FORM(request.companyId), request, generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function getAllSurveys () {
  return axios.get(api.SURVEY_GET_ALL, generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function getAllCompanies () {
  return axios.get(api.SURVEY_GET_ALL_COMPANIES, generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function getAllSurveysByCompany (companyId) {
  return axios.get(api.SURVEY_GET_BY_COMPANY(companyId), generateRequestHeaders())
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export function getSurveyById (companyId, surveyId) {
  return axios.get(api.SURVEY_GET_BY_ID(companyId, surveyId), generateRequestHeaders())
    .then(res => {
      return Promise.resolve((res))
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

function generateRequestHeaders () {
  cookiesData = !cookiesData ? Cookies.get('access_token') : cookiesData
  return {
    headers: {
      Authorization: `Bearer ${cookiesData}`
    }
  }
}
