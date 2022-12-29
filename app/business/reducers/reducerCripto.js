import {
  GET_CRIPTOS,
  GET_CRIPTOS_HISTORY_REQUEST,
  GET_CRIPTOS_HISTORY_SUCCESS,
  GET_CRIPTOS_SUCCESS
} from "../actions/actionCriptos";

const stateUsuario = {
  info: [],
  historico: []
}

/**
 * It takes the current state and an action, and returns the next state
 * @param [state] - The current state of the store.
 * @param action - The action object that was dispatched.
 * @returns The state of the application.
 */
export const reducerCripto = (state = stateUsuario, action) => {
  switch (action.type) {
    case GET_CRIPTOS:
      return {
        ...state,
      };
    case GET_CRIPTOS_SUCCESS:
      return {
        ...state,
        info: action.criptos,
      };
    case GET_CRIPTOS_HISTORY_REQUEST:
      return {
        ...state,
      };
    case GET_CRIPTOS_HISTORY_SUCCESS:
      return {
        ...state,
        historico: action.criptos,
      };
    default:
      return state
  }
}