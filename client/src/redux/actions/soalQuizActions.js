import {
  CREATE_SOAL_QUIZ,
  RETRIEVE_SOAL_QUIZ,
  UPDATE_SOAL_QUIZ,
  DELETE_SOAL_QUIZ,
  LOADING_SOAL_QUIZ
} from '../types/soalQuizTypes'


import axios from 'axios'
import { setAlertFailed, setAlertSuccess } from './alertActions'

export const retrieveSoalQuiz = (id) => dispatch => {
  dispatch(setLoadingSoalQuiz())
  axios
    .get(`/api/soal-quiz?quiz_id=${id}`)
    .then(res =>
      dispatch({
        type: RETRIEVE_SOAL_QUIZ,
        payload: res.data
      })
    )
}

export const createSoalQuiz = (data) => dispatch => {
  dispatch(setLoadingSoalQuiz())
  axios
    .post('/api/soal-quiz', data)
    .then(res =>
      dispatch({
        type: CREATE_SOAL_QUIZ,
        payload: res.data
      })
    )
    .then(dispatch(setAlertSuccess('Data soal quiz berhasil ditambahkan')))
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const updateSoalQuiz = ({
  soal_quiz_id, quiz_id, text_soal
}) => dispatch => {
  dispatch(setLoadingSoalQuiz())
  axios
    .put(`/api/soal-quiz/${soal_quiz_id}`, {quiz_id, text_soal})
    .then(res =>
      dispatch({
        type: UPDATE_SOAL_QUIZ,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Data soal-quiz berhasil diubah'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const deleteSoalQuiz = (id) => dispatch => {
  axios
    .delete(`/api/soal-quiz/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SOAL_QUIZ,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Berhasil menghapus data soal-quiz'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const setLoadingSoalQuiz = () => {
  return {
    type: LOADING_SOAL_QUIZ
  }
}