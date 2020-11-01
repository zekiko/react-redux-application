import * as actionTypes from './types'

let firstData = 0
export const add = () => ({
    type: actionTypes.EKLE,
    data: ++firstData,
})

export const sub = () => ({
    type: actionTypes.CIKAR,
    data: --firstData
})

export const reset = () => ({
    type: actionTypes.SIFIRLA,
    data: firstData=0
})