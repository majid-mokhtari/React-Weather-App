import axios from 'axios'
import * as util from '../../auth/components/util'
import * as types from '../../../constants/types'

export const baseUrl =
  process.env.REACT_APP_PERSONAL_DASH_URL || 'http://localhost:8000'

export function getWeather () {
  return dispatch => {
    axios
      .get(`${baseUrl}/weather`)
      .then(res => {
        return dispatch({
          type: types.WEATHER_IS_SET,
          payload: res.data
        })
      })
      .catch(err => {
        return dispatch(util.onServerError(err))
      })
  }
}

export function addTodo () {
  return dispatch => {
    axios
      .post(`${baseUrl}/todos`, { text: 'This is coming from React!' })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        return dispatch(util.onServerError(err))
      })
  }
}
