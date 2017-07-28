import axios from 'axios'

export const SEED_PASSWORD = 'SEED_PASSWORD'
export const ADD_PASSWORD = 'ADD_PASSWORD'
export const REMOVE_PASSWORD = 'REMOVE_PASSWORD'
export const  UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const SEARCH_PASSWORD = 'SEARCH_PASSWORD'
export const SET_URL = 'SET_URL'
export const SET_USERNAME = 'SET_USERNAME'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_ID = 'SET_ID'
export const RESET = ' RESET'
export const SET_INDEX = 'SET_INDEX'
export const SET_CREATED = 'SET_CREATED'

export function setCreated(value) {
     return {
          type: SET_CREATED,
          value
     }
}

export function setIndex(value) {
     return {
          type: SET_INDEX,
          value
     }
}

export function reset() {
     return {
          type: RESET
     }
}

export function setId(value) {
     return {
          type: SET_ID,
          value
     }
}

export function setPassword(value) {
     return {
          type: SET_PASSWORD,
          value
     }
}

export function setUsername (value) {
     return {
          type: SET_USERNAME,
          value
     }
}

export function setUrl (value) {
     return {
          type: SET_URL,
          value
     }
}

export function seedPasswordSuccess(value) {
     return {
          type: SEED_PASSWORD,
          value
     }
}
