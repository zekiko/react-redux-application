import * as actionTypes from '../actions/types'

export const initialState = {
  esasdata: 0,
  message: "nope"
}

export default function xReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.EKLE:
      return { ...state, esasdata: action.data, message: "toplandı" }
    case actionTypes.CIKAR:
      return { ...state, esasdata: action.data, message: "çıkarıldı" }
    case actionTypes.SIFIRLA:
      return { ...state, esasdata: action.data, message: "sıfırlandı" }
    default:
      return state
  }
}
