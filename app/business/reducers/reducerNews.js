import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "../actions/actionNews";

const stateUsuario = {
  news: []
}

export const reducerNews = (state = stateUsuario, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.news,
      };
    default:
      return state
  }
}