import { CREATE_PROGRESS, RETRIEVE_PROGRESS, LOADING_PROGRESS } from '../types/progressTypes'
import axios from 'axios'
import { returnErrors } from './errorActions';


export const createProgress = (data) => dispatch => {
  console.log('data :', data)
  dispatch(setLoadingProgress())
  axios
    .post('/api/progress', data)
    .then(res =>
      // console.log(res.data)
      dispatch({
        type: CREATE_PROGRESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status, 'CREATE PROGRESS FAIL'))
    )
}

export const retrieveProgress = () => dispatch => {
  dispatch(setLoadingProgress())
  axios
    .get('/api/progress')
    .then(res => 
      dispatch({
        type: RETRIEVE_PROGRESS,
        payload: res.data
      })  
    )
}

export const retrieveUserProgress = (user_id) => dispatch => {
  console.log(user_id)
  dispatch(setLoadingProgress())
  axios
    .get(`/api/progress?user_id=${user_id}`)
    .then(res => 
      dispatch({
        type: RETRIEVE_PROGRESS,
        payload: res.data
      })  
    )
}

export const setLoadingProgress = () => {
  return {
    type: LOADING_PROGRESS
  }
}