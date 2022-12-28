import { combineReducers } from "redux";

import { reducerCripto } from "./reducerCripto";
import { reducerNews } from "./reducerNews";

export default combineReducers({
    reducerCripto,
    reducerNews
})