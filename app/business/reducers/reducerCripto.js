import { GET_CRIPTOS, GET_CRIPTOS_SUCCESS } from "../actions/actionCriptos";

const stateUsuario = {
  info: []
}

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
    default:
      return state
  }
}