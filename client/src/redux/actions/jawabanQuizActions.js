import {
  CREATE_JAWABAN_QUIZ,
  RETRIEVE_JAWABAN_QUIZ,
  UPDATE_JAWABAN_QUIZ,
  DELETE_JAWABAN_QUIZ,
  LOADING_JAWABAN_QUIZ
} from '../types/jawabanQuizTypes'


import axios from 'axios'
import { setAlertFailed, setAlertSuccess } from './alertActions'

export const retrieveJawabanQuiz = (id) => dispatch => {
  dispatch(setLoadingJawabanQuiz())
  axios
    .get(`/api/jawaban-soal?soal_quiz_id=${id}`)
    .then(res =>
      dispatch({
        type: RETRIEVE_JAWABAN_QUIZ,
        payload: res.data
      })
    )
}

export const createJawabanQuiz = (data) => dispatch => {
  dispatch(setLoadingJawabanQuiz())
  axios
    .post('/api/jawaban-soal', data)
    .then(res =>
      dispatch({
        type: CREATE_JAWABAN_QUIZ,
        payload: res.data
      })
    )
    .then(dispatch(setAlertSuccess('Data jawaban quiz berhasil ditambahkan')))
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const updateJawabanQuiz = ({
  jawaban_quiz_id, soal_quiz_id, text_jawaban, benar
}) => dispatch => {
  dispatch(setLoadingJawabanQuiz())
  axios
    .put(`/api/jawaban-soal/${jawaban_quiz_id}`, {soal_quiz_id, text_jawaban, benar})
    .then(res =>
      dispatch({
        type: UPDATE_JAWABAN_QUIZ,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Data jawaban quiz berhasil diubah'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const deleteJawabanQuiz = (id) => dispatch => {
  axios
    .delete(`/api/jawaban-soal/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_JAWABAN_QUIZ,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Berhasil menghapus data jawaban quiz'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const setLoadingJawabanQuiz = () => {
  return {
    type: LOADING_JAWABAN_QUIZ
  }
}