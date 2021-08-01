import {GET_BAB_ALL, LOADING_BAB} from '../types/allMateriTypes'
import axios from 'axios'

export const getAllBab = () => dispatch => {
  dispatch(setBabLoading())
  axios
    .get('/api/bab/all')
    .then(res => 
      dispatch({
        type: GET_BAB_ALL,
        payload: res.data
      })  
    )
}

export const setBabLoading = () => {
  return {
    type: LOADING_BAB
  }
}