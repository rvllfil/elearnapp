import {
  CREATE_MATERI,
  RETRIEVE_MATERI,
  UPDATE_MATERI,
  DELETE_MATERI,
  LOADING_MATERI
} from '../types/materiTypes'


import axios from 'axios'
import { setAlertFailed, setAlertSuccess } from './alertActions'

export const retrieveMateri = () => dispatch => {
  dispatch(setLoadingMateri())
  axios
    .get('/api/materi')
    .then(res =>
      dispatch({
        type: RETRIEVE_MATERI,
        payload: res.data
      })
    )
}

export const createMateri = (data) => dispatch => {
  dispatch(setLoadingMateri())
  axios
    .post('/api/materi', data)
    .then(res =>
      dispatch({
        type: CREATE_MATERI,
        payload: res.data
      })
    )
    .then(dispatch(setAlertSuccess('Data materi berhasil ditambahkan')))
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const updateMateri = ({
  materi_id, sub_bab_id, judul_materi, isi_materi, urutan_materi
}) => dispatch => {
  dispatch(setLoadingMateri())
  axios
    .put(`/api/materi/${materi_id}`, {sub_bab_id, judul_materi, isi_materi, urutan_materi})
    .then(res =>
      dispatch({
        type: UPDATE_MATERI,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Data materi berhasil diubah'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const deleteMateri = (id) => dispatch => {
  axios
    .delete(`/api/materi/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MATERI,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Berhasil menghapus data materi'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const setLoadingMateri = () => {
  return {
    type: LOADING_MATERI
  }
}