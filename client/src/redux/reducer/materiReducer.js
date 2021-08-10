import {
  CREATE_MATERI,
  RETRIEVE_MATERI,
  UPDATE_MATERI,
  DELETE_MATERI,
  LOADING_MATERI
} from '../types/materiTypes'

const initialState = {
  materi : [],
  loading: false
}


const materiReducer = (state = initialState, action) => {
  const {type, payload} = action
  
  switch(type) {
    
    case CREATE_MATERI:
      return{
        ...state,
        materi: [...state.materi, payload],
        loading: false
      }
    
    case RETRIEVE_MATERI: 
      return {
        ...state,
        materi: payload,
        loading: false
      }

    case UPDATE_MATERI:
      return {
        ...state,
        materi: state.materi.map(data => {
          if(data.materi_id === payload.materi_id){
            return {
              ...data, 
              ...payload
            }
          } else {
            return data
          }
        }),
        loading: false
      }
    
    case DELETE_MATERI:
      console.log(payload.materi_id)
      return {
        ...state,
        materi: state.materi.filter(item => item.materi_id !== payload.materi_id)
      }

    case LOADING_MATERI:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  
  }
}

export default materiReducer
