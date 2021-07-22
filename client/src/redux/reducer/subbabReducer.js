import {
  CREATE_SUBBAB,
  RETRIEVE_SUBBAB,
  UPDATE_SUBBAB,
  DELETE_SUBBAB,
  LOADING_SUBBAB
} from '../types/subbabTypes'

const initialState = {
  subbab: [],
  loading: false
}


const subbabReducer = (state = initialState, action) => {
  const {type, payload} = action
  
  switch(type) {
    
    case CREATE_SUBBAB:
      return{
        ...state,
        subbab: [ ...state.subbab, payload],
        loading: false
      }
    
    case RETRIEVE_SUBBAB: 
      return {
        ...state,
        subbab: payload,
        loading: false
      }

    case UPDATE_SUBBAB:
      console.log(payload)
      return {
        laoding: false,
        subbab: state.subbab.map((data) => {
          if (data.sub_bab_id === payload.sub_bab_id) {
            return {
              ...data,
              ...payload,
            };
          } else {
            return data;
          }
        })
      }
    
    case DELETE_SUBBAB:
      return {
        ...state,
        subbab: state.subbab.filter(item => item.sub_bab_id !== payload.sub_bab_id)
      }

    case LOADING_SUBBAB:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  
  }
}

export default subbabReducer
