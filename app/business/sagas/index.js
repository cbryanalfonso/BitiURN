import { all } from "redux-saga/effects";
import SagasCriptos from "./sagasCriptos";
export default function* rootSaga() {
    yield all([
      SagasCriptos()
    ]);
  }