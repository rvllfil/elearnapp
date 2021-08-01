import {
  CREATE_BAB,
  RETRIEVE_BAB,
  UPDATE_BAB,
  DELETE_BAB,
  LOADING_BAB
} from '../types/babTypes'

const initialState = {
  bab: [],
  loading: false
}


const babReducer = (state = initialState, action) => {
  const {type, payload} = action
  
  switch(type) {
    
    case CREATE_BAB:
      return{
        ...state,
        bab: [ ...state.bab, payload],
        loading: false
      }
    
    case RETRIEVE_BAB: 
      return {
        ...state,
        bab: payload,
        loading: false
      }

    case UPDATE_BAB:
      console.log(payload)
      return {
        laoding: false,
        bab: state.bab.map((data) => {
          if (data.bab_id === payload.bab_id) {
            return {
              ...data,
              ...payload,
            };
          } else {
            return data;
          }
        })
      }
    
    case DELETE_BAB:
      return {
        ...state,
        bab: state.bab.filter(item => item.bab_id !== payload.bab_id)
      }

    case LOADING_BAB:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  
  }
}

export default babReducer
