import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "../actions/actionNews";

const stateUsuario = {
  news: []
}

/**
 * It takes the current state and an action, and returns the next state
 * @param [state] - The current state of the store.
 * @param action - The action object that was dispatched.
 * @returns The state of the news
 */
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