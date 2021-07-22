import {
  CREATE_SUBBAB,
  RETRIEVE_SUBBAB,
  UPDATE_SUBBAB,
  DELETE_SUBBAB,
  LOADING_SUBBAB
} from '../types/subbabTypes'
import axios from 'axios'
import { setAlertFailed, setAlertSuccess } from './alertActions'

export const retrieveSubbab = () => dispatch => {
  dispatch(setLoadingSubbab())
  axios
    .get('/api/sub-bab')
    .then(res =>
      dispatch({
        type: RETRIEVE_SUBBAB,
        payload: res.data
      })
    )
}

export const createSubbab = (data) => dispatch => {
  dispatch(setLoadingSubbab())
  axios
    .post('/api/sub-bab', data)
    .then(res =>
      dispatch({
        type: CREATE_SUBBAB,
        payload: res.data
      })
    )
    .then(dispatch(setAlertSuccess('Data berhasil ditambahkan')))
    .catch(err =>
      dispatch(setAlertFailed
        (`wew`))
    );
}

export const updateSubbab = ({
  sub_bab_id, bab_id, judul_sub_bab, urutan_sub_bab
}) => dispatch => {
  dispatch(setLoadingSubbab())
  axios
    .put(`/api/sub-bab/${sub_bab_id}`, {bab_id, judul_sub_bab, urutan_sub_bab})
    .then(res =>
      dispatch({
        type: UPDATE_SUBBAB,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Data berhasil diubah'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const deleteSubbab = (id) => dispatch => {
  axios
    .delete(`/api/sub-bab/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SUBBAB,
        payload: res.data
      }),
      dispatch(setAlertSuccess('Berhasil menghapus data'))
    )
    .catch(err =>
      dispatch(setAlertFailed(`${err.response.status}: ${err.response.data.msg}`))
    );
}

export const setLoadingSubbab = () => {
  return {
    type: LOADING_SUBBAB
  }
}