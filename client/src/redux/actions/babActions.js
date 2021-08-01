import {
  CREATE_BAB,
  RETRIEVE_BAB,
  UPDATE_BAB,
  DELETE_BAB,
  LOADING_BAB
} from '../types/babTypes'
import axios from 'axios'
import { setAlertFailed, setAlertSuccess } from './alertActions'

export const retrieveBab = () => dispatch => {
  dispatch(setLoadingBab())
  axios
    .get('/api/bab')
    .then(res =>
      dispatch({
        type: RETRIEVE_BAB,
        payload: res.data
      })
    )
}

export const createBab = (data) => dispatch => {
  dispatch(setLoadingBab())
  axios
    .post('/api/bab', data)
    .then(res =>
      dispatch({
        type: CREATE_BAB,
        payload: res.data
      })
    )
    .then(dispatch(setAlertSuccess('Data bab berhasil ditambahkan')))
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const updateBab = ({
  bab_id, judul_bab, urutan_bab
}) => dispatch => {
  dispatch(setLoadingBab())
  axios
    .put(`/api/bab/${bab_id}`, {judul_bab, urutan_bab})
    .then(res =>
      dispatch({
        type: UPDATE_BAB,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Data bab berhasil diubah'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const deleteBab = (id) => dispatch => {
  axios
    .delete(`/api/bab/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BAB,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Berhasil menghapus data bab'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const setLoadingBab = () => {
  return {
    type: LOADING_BAB
  }
}