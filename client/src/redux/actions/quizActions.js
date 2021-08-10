import {
  CREATE_QUIZ,
  RETRIEVE_QUIZ,
  UPDATE_QUIZ,
  DELETE_QUIZ,
  LOADING_QUIZ
} from '../types/quizTypes'


import axios from 'axios'
import { setAlertFailed, setAlertSuccess } from './alertActions'

export const retrieveQuiz = () => dispatch => {
  dispatch(setLoadingQuiz())
  axios
    .get('/api/quiz')
    .then(res =>
      dispatch({
        type: RETRIEVE_QUIZ,
        payload: res.data
      })
    )
}

export const createQuiz = (data) => dispatch => {
  dispatch(setLoadingQuiz())
  axios
    .post('/api/quiz', data)
    .then(res =>
      dispatch({
        type: CREATE_QUIZ,
        payload: res.data
      })
    )
    .then(dispatch(setAlertSuccess('Data quiz berhasil ditambahkan')))
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const updateQuiz = ({
  quiz_id, sub_bab_id, judul_quiz
}) => dispatch => {
  dispatch(setLoadingQuiz())
  axios
    .put(`/api/quiz/${quiz_id}`, {sub_bab_id, judul_quiz})
    .then(res =>
      dispatch({
        type: UPDATE_QUIZ,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Data quiz berhasil diubah'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const deleteQuiz = (id) => dispatch => {
  axios
    .delete(`/api/quiz/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_QUIZ,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Berhasil menghapus data quiz'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const setLoadingQuiz = () => {
  return {
    type: LOADING_QUIZ
  }
}