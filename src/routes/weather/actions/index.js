import axios from 'axios'
import * as util from '../../auth/components/util'
import * as types from '../../../constants/types'

export const baseUrl =
  process.env.REACT_APP_PERSONAL_DASH_URL || 'http://localhost:8010'

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
        const { data } = res
        console.log('Todo created: ', data)
      })
      .catch(err => {
        return dispatch(util.onServerError(err))
      })
  }
}

export function getTodos () {
  return dispatch => {
    axios
      .get(`${baseUrl}/todos`)
      .then(res => {
        const { data } = res
        console.log('List of todos: ', data)
      })
      .catch(err => {
        return dispatch(util.onServerError(err))
      })
  }
}

export function deleteAllTodos () {
  return dispatch => {
    axios
      .delete(`${baseUrl}/todos`)
      .then(res => {
        const { data } = res
        console.log(`${data.n} todo(s) have been deleted`)
      })
      .catch(err => {
        return dispatch(util.onServerError(err))
      })
  }
}
