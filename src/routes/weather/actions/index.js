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
